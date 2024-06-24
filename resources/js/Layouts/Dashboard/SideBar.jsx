import React from "react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

const SideBar = () => {
    return (
        <aside
            id="sidebar-multi-level-sidebar"
            className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                <div className="flex w-full h-16 justify-center items-center border-b border-b-gray-200 mb-8">
                    <Link href="/">
                        <img
                            src="/assets/img/logo.png"
                            alt=""
                            className=""
                            width={170}
                            height={170}
                        />
                    </Link>
                </div>
                <ul className="space-y-2 font-medium">
                    <NavLink
                        href="/dashboard"
                        active={
                            window.location.pathname == "/dashboard"
                                ? true
                                : false
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        active={
                            window.location.pathname == "/job" ? true : false
                        }
                    >
                        Job Alert
                    </NavLink>
                    <NavLink
                        active={
                            window.location.pathname == "/resumes"
                                ? true
                                : false
                        }
                    >
                        Resumes
                    </NavLink>
                    <NavLink
                        active={
                            window.location.pathname == "/profile"
                                ? true
                                : false
                        }
                        href="/profile"
                    >
                        My Profile
                    </NavLink>
                    <NavLink
                        method="post"
                        href={"/logout"}
                        as="button"
                        className="w-full"
                    >
                        Log Out
                    </NavLink>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;
