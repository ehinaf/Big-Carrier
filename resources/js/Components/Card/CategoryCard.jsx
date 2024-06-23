import { Link } from "@inertiajs/react";
import React from "react";

const CategoryCard = ({ Icon, title, count }) => {
    return (
        <Link className="flex bg-gray-100 hover:bg-[#e1d12356] p-5 rounded-lg transition-all duration-500">
            <div className="flex w-5/6 flex-col gap-3">
                <img src={Icon} alt="" width={44} height={44} />
                <p className="text-sm">{title}</p>
            </div>
            <div className="flex w-1/6 text-5xl font-semibold text-gray-300 items-center">
                {count}
            </div>
        </Link>
    );
};

export default CategoryCard;
