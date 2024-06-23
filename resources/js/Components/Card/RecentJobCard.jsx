import React from "react";
import { Link } from "@inertiajs/react";

import CompanyIcon from "../../../../public/assets/icons/company.svg";
import MapIcon from "../../../../public/assets/icons/map.svg";
import SallaryIcon from "../../../../public/assets/icons/sallary.svg";

const RecentJobCard = ({
    icon,
    title,
    company,
    address,
    sallary,
    jobTypes,
}) => {
    return (
        <Link href="/">
            <li
                className="grid grid-cols-7 p-5 border-2 border-l-4 border-l-blue-800 border-gray-200  rounded-md items-center hover:bg-[#e1d12356]
            transition-all duration-500"
            >
                <div className="col-span-1 bg-black w-max p-3 rounded-md">
                    <img src={icon} alt="" />
                </div>
                <div className="col-span-4 flex flex-col">
                    <h3 className="font-semibold text-xl">{title}</h3>
                    <div className="flex flex-wrap gap-x-4 text-sm text-gray-500">
                        <p className="flex gap-x-1">
                            <img
                                src={CompanyIcon}
                                alt=""
                                width={15}
                                height={15}
                            />
                            {company}
                        </p>
                        <p className="flex gap-x-1">
                            <img src={MapIcon} alt="" width={12} height={12} />
                            {address}
                        </p>
                        <p className="flex gap-x-1">
                            <img
                                src={SallaryIcon}
                                alt=""
                                width={15}
                                height={15}
                            />
                            Rp {sallary}
                        </p>
                    </div>
                </div>
                <div className="col-span-2 flex flex-wrap gap-1">
                    <button className="bg-blue-600 bg-opacity-5 border border-blue-500 text-blue-500 py-1 px-3 rounded-md text-md font-medium">
                        Full Time
                    </button>
                    <button className="bg-yellow-600 bg-opacity-5 border border-yellow-500 text-yellow-500 py-1 px-3 rounded-md text-md font-medium">
                        Internship
                    </button>
                    <button className="bg-red-600 bg-opacity-5 border border-red-500 text-red-500 py-1 px-3 rounded-md text-md font-medium">
                        Temporary
                    </button>
                </div>
            </li>
        </Link>
    );
};

export default RecentJobCard;
