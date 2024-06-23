import React from "react";
import Logo from "../../../../public/assets/img/logo.png";
import { Link } from "@inertiajs/react";

const Header = () => {
    return (
        <header className="sticky top-0 w-full z-10 md:bg-red md:flex-row md:flex-nowrap flex items-center transition-all  border-b-2 bg-white">
            <div className=" w-96 justify-center md:flex-nowrap flex-wrap md:px-8 hidden md:flex md:py-7">
                <img src={Logo} alt="" />
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

            <div className="w-52 justify-end md:flex-nowrap flex-wrap md:px-10 hidden md:flex gap-5 font-semibold text-lg md:py-7">
                <Link href="/login" className=" hover:text-[#E1D123]">
                    Login
                </Link>
                <Link href="/register" className=" hover:text-[#E1D123]">
                    Register
                </Link>
            </div>
        </header>
    );
};

export default Header;
