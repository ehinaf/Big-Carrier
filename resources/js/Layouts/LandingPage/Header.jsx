import React, { useState } from "react";
import { Link } from "@inertiajs/react";

import LoginModal from "@/Components/Modal/LoginModal";
import RegisterModal from "@/Components/Modal/RegisterModal";

import Logo from "../../../../public/assets/img/logo.png";
import ProfilePic from "../../../../public/assets/img/profile_pic.png";
import Dropdown from "@/Components/Dropdown";

const Header = ({ auth }) => {
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalRegister, setShowModalRegister] = useState(false);

    return (
        <header className="sticky top-0 w-full z-10 md:bg-red md:flex-row md:flex-nowrap flex items-center transition-all  border-b-2 bg-white">
            <div className=" w-96 justify-center md:flex-nowrap flex-wrap md:px-8 hidden md:flex md:py-7">
                <img src={Logo} alt="logo" />
            </div>
            <nav className="w-full h-full mx-auto border-x">
                <ul className="md:px-8 hidden md:flex gap-5 text-lg md:py-7">
                    <li>
                        <Link className="text-gray-700 hover:text-[#E1D123]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-700 hover:text-[#E1D123]">
                            For Candidates
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-700 hover:text-[#E1D123]">
                            For Employes
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-700 hover:text-[#E1D123]">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="w-auto md:flex-nowrap flex-wrap px-5 hidden md:flex gap-5 font-semibold text-lg md:py-7">
                {auth.user ? (
                    <div className="flex gap-2 items-center justify-center">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <img
                                        src={ProfilePic}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="p-3 bg-gray-200 rounded-full"
                                    />
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2  border border-transparent text-md leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <p className="mr-1">Hi, </p>
                                        {auth.user.name}

                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("dashboard")}>
                                    Dashboard
                                </Dropdown.Link>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                ) : (
                    <>
                        <Link
                            onClick={(e) => {
                                e.preventDefault();
                                setShowModalLogin(true);
                            }}
                            className=" hover:text-[#E1D123]"
                        >
                            Login
                        </Link>
                        <Link
                            onClick={(e) => {
                                e.preventDefault();
                                setShowModalRegister(true);
                            }}
                            className=" hover:text-[#E1D123]"
                        >
                            Register
                        </Link>
                    </>
                )}

                {showModalLogin && (
                    <LoginModal closeModal={setShowModalLogin} />
                )}
                {showModalRegister && (
                    <RegisterModal closeModal={setShowModalRegister} />
                )}
            </div>
        </header>
    );
};

export default Header;
