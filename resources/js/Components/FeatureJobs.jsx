import React from "react";

import CompanyIcon from "../../../public/assets/icons/company.svg";
import MapIcon from "../../../public/assets/icons/map.svg";
import SallaryIcon from "../../../public/assets/icons/sallary.svg";

const FeatureJobs = () => {
    return (
        <section className="col-span-1">
            <h2 className="text-3xl font-semibold mb-8">Featured Jobs</h2>
            <div className="flex flex-col px-8 py-6 border border-gray-300 rounded-md">
                <div className="flex flex-wrap gap-x-2 mb-8">
                    <h3 className="text-2xl font-semibold">
                        Senior Video Grapher & Editor
                    </h3>
                    <button className="bg-blue-600 bg-opacity-5 border border-blue-500 text-blue-500 py-1 px-3 rounded-md text-md font-medium">
                        Full Time
                    </button>
                    <button className="bg-blue-600 bg-opacity-5 border border-blue-500 text-blue-500 py-1 px-3 rounded-md text-md font-medium">
                        Full Time
                    </button>
                    <button className="bg-blue-600 bg-opacity-5 border border-blue-500 text-blue-500 py-1 px-3 rounded-md text-md font-medium">
                        Full Time
                    </button>
                </div>
                <div className="flex flex-wrap gap-y-3 gap-x-10 mb-8 text-lg text-gray-500">
                    <h3 className="flex gap-x-1">
                        <img
                            src={CompanyIcon}
                            alt="company"
                            width={17}
                            height={17}
                        />
                        Big Pro
                    </h3>
                    <h3 className="flex gap-x-1">
                        <img src={MapIcon} alt="map" width={13} height={13} />
                        Purwokerto
                    </h3>
                    <h3 className="flex gap-x-1">
                        <img
                            src={SallaryIcon}
                            alt="sallary"
                            width={17}
                            height={17}
                        />
                        Rp 2.5000.000 - 3.000.000
                    </h3>
                </div>
                <p className="text-md text-gray-500 mb-8">
                    Kami sedang mencari Video Editor yang kreatif dan berbakat
                    untuk bergabung dengan tim kami. Tugas utama Anda adalah
                    mengedit dan menyusun konten video sesuai dengan kebutuhan
                    perusahaan.
                </p>

                <button className="w-full bg-[#E1D123] py-2 px-4 rounded-md text-md font-semibold">
                    Lamar Pekerjaan
                </button>
            </div>
        </section>
    );
};

export default FeatureJobs;
