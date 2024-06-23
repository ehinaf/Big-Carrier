import React from "react";
import Logo from "../../../../public/assets/img/logo-light.png";
import Clock from "../../../../public/assets/icons/clock.svg";
import Up from "../../../../public/assets/icons/up.svg";
import FacebookIcon from "../../../../public/assets/icons/facebook.svg";
import LinkedinIcon from "../../../../public/assets/icons/linkedin.svg";
const Footer = () => {
    return (
        <footer className="w-full ">
            <section className="flex w-full gap-0 px-52 border-b-2 border-gray-100 border-opacity-10 bg-[#282828] items-center">
                <div className="w-4/6 py-6 ">
                    <img src={Logo} alt="" />
                </div>
                <div className="w-80 flex gap-4 border-x-gray-100 border-x-[1px] border-opacity-10 p-6 items-center justify-center">
                    <img
                        src={Clock}
                        alt=""
                        width={55}
                        height={55}
                        className="bg-[#363636] w-50 h-50 p-4 rounded-md h-max"
                    />
                    <div className="flex flex-col">
                        <h5 className="text-2xl text-white font-medium">100</h5>
                        <p className="text-lg text-gray-500 font-medium">
                            Job Listing
                        </p>
                    </div>
                </div>
                <div className="w-80 flex gap-4 p-6  items-center justify-center ">
                    <img
                        src={Up}
                        alt=""
                        width={55}
                        height={55}
                        className="bg-[#363636] w-50 h-50 p-4 rounded-md h-max"
                    />
                    <div className="flex flex-col">
                        <h5 className="text-2xl text-white font-medium">50</h5>
                        <p className="text-lg text-gray-500 font-medium">
                            Resumes Posted
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex gap-x-6 item-start px-52 py-14 border-b-2 border-gray-100 border-opacity-10 bg-[#282828]">
                <div className="w-52">
                    <h4 className="text-xl text-white font-semibold mb-4">
                        For Candidates
                    </h4>
                    <ul className="flex flex-col gap-2 text-md text-gray-500">
                        <li>Cari Pekerjaan</li>
                        <li>Cari Katergori</li>
                        <li>Dashboard Kandidat</li>
                        <li>Lowongan Pekerjaan</li>
                        <li>My Bookmarks</li>
                    </ul>
                </div>
                <div className="w-52">
                    <h4 className="text-xl text-white font-semibold mb-4">
                        For Employer
                    </h4>
                    <ul className="flex flex-col gap-2 text-md text-gray-500">
                        <li>Cari Kandidat</li>
                        <li>Dashboard</li>
                        <li>Tambahkan Pekerjaan</li>
                    </ul>
                </div>
                <div className="w-52">
                    <h4 className="text-xl text-white font-semibold mb-4">
                        Other
                    </h4>
                    <ul className="flex flex-col gap-2 text-md text-gray-500">
                        <li>Blog</li>
                        <li>Cantact</li>
                    </ul>
                </div>
                <div className="w-52">
                    <h4 className="text-xl text-white font-semibold mb-4">
                        Legal
                    </h4>
                    <ul className="flex flex-col gap-2 text-md text-gray-500">
                        <li>Privacy Policy</li>
                        <li>Term of Use</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="w-auto">
                    <h4 className="text-xl text-white font-semibold">
                        Daftar untuk bisa mulai melamar
                    </h4>
                    <p className="text-md text-gray-500 my-4">
                        Silahkan Daftar pada halaman register untuk membuat akun
                    </p>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            className=" w-72 py-2 bg-[#333333] focus:ring-0 ring-0 border-0 text-gray-500 text-sm rounded-md"
                            placeholder="Enter your email here"
                        />
                        <button className="bg-[#E1D123] py-2 px-4 rounded-md text-md font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
            <section className="flex  item-end justify-end gap-4 px-52 py-4 border-b-2 border-gray-100 border-opacity-10 bg-[#282828]">
                <img
                    src={FacebookIcon}
                    alt="facebiik"
                    className="text-gray-900"
                />
                <img
                    src={LinkedinIcon}
                    alt="facebiik"
                    className="text-gray-900"
                />
            </section>
        </footer>
    );
};

export default Footer;
