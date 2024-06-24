import React, { useState } from "react";

import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function RegisterModal({ closeModal, status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "candidate",
    });

    const onHandleClick = (e) => {
        e.preventDefault();
        closeModal(false);
    };
    const onHandleClickRole = (e, role) => {
        e.preventDefault();
        setData("role", role);
    };

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), { onSuccess: () => closeModal(false) });
    };

    return (
        <>
            <Head title="Register" />
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-60">
                <div className="relative w-1/2 mx-auto max-w-md bg-white rounded-md">
                    {/*content*/}

                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <div className="flex  justify-between p-8 mb-8 border-b-gray-200 border-b">
                        <h2 className="flex text-3xl">Register</h2>
                        <img
                            src="/assets/icons/close-icon.svg"
                            alt=""
                            width={25}
                            height={25}
                            className="flex justify-items-end cursor-pointer"
                            onClick={onHandleClick}
                        />
                    </div>

                    <form onSubmit={submit} className="px-8 pb-8">
                        <div className="flex items-center justify-end  gap-2">
                            <PrimaryButton
                                className={`w-full justify-center ${
                                    data.role == "employer"
                                        ? "bg-white border-2 border-[#E1D123]"
                                        : ""
                                }`}
                                onClick={(e) =>
                                    onHandleClickRole(e, "candidate")
                                }
                            >
                                Pelamar
                            </PrimaryButton>
                            <PrimaryButton
                                className={`w-full justify-center ${
                                    data.role == "candidate"
                                        ? "bg-white border-2 border-[#E1D123]"
                                        : ""
                                }`}
                                onClick={(e) =>
                                    onHandleClickRole(e, "employer")
                                }
                            >
                                Perusahaan
                            </PrimaryButton>
                        </div>

                        <div className="mt-5">
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-center mt-8 gap-1">
                            <Link className="text-sm text-[#E1D123]">
                                Already registered?
                            </Link>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="w-full justify-center"
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
