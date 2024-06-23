import React from "react";
import { Link } from "@inertiajs/react";
import RecentJobCard from "./Card/RecentJobCard";

import AccountingIcon from "../../../public/assets/icons/accounting.svg";
import CopyWriterIcon from "../../../public/assets/icons/copy-writer.svg";
import DigmartIcon from "../../../public/assets/icons/digital-marketing.svg";
import DesignerIcon from "../../../public/assets/icons/grapich-designer.svg";
import SalesIcon from "../../../public/assets/icons/salesman.svg";

const RecentJobs = () => {
    return (
        <section className="col-span-2">
            <h2 className="text-3xl font-semibold mb-8">Lowongan Terkini</h2>
            <ul className="w-full flex flex-col gap-2 mb-10">
                <RecentJobCard
                    icon={DesignerIcon}
                    title="Grapich Designer"
                    company="BigPro"
                    address="Purwokerto"
                    sallary="2.500.000 - 3.000.000"
                    jobTypes={["full", "free", "intern", "temp"]}
                />
                <RecentJobCard
                    icon={DigmartIcon}
                    title="Digital Marketing Spesialist"
                    company="BigPro"
                    address="Purwokerto"
                    sallary="2.000.000 - 4.000.000"
                    jobTypes={["full", "free", "intern", "temp"]}
                />
                <RecentJobCard
                    icon={AccountingIcon}
                    title="Accounting / Finance"
                    company="BigPro"
                    address="Purwokerto"
                    sallary="3.0000.000 - 5.000.000"
                    jobTypes={["full", "free", "intern", "temp"]}
                />
                <RecentJobCard
                    icon={CopyWriterIcon}
                    title="Copy Writer"
                    company="BigPro"
                    address="Purwokerto"
                    sallary="2.500.000 - 3.000.000"
                    jobTypes={["full", "free", "intern", "temp"]}
                />
            </ul>
            <div className="flex w-full justify-center">
                <button className="bg-[#E1D123] py-2 px-4 rounded-md text-md font-semibold">
                    Browse Jobs
                </button>
            </div>
        </section>
    );
};

export default RecentJobs;
