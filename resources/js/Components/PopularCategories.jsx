import React from "react";
import CategoryCard from "./Card/CategoryCard";

import AccountingIcon from "../../../public/assets/icons/accounting.svg";
import CopyWriterIcon from "../../../public/assets/icons/copy-writer.svg";
import DigmartIcon from "../../../public/assets/icons/digital-marketing.svg";
import DesignerIcon from "../../../public/assets/icons/grapich-designer.svg";
import SalesIcon from "../../../public/assets/icons/salesman.svg";
import EditorIcon from "../../../public/assets/icons/video-editor.svg";

const PopularCategories = () => {
    return (
        <section className="w-full px-52 py-20 border-b-2 border-gray-100">
            <h2 className="text-3xl font-semibold mb-8">Kategori Terpopuler</h2>
            <div className="grid grid-cols-4 gap-4 mb-10">
                <CategoryCard
                    Icon={AccountingIcon}
                    title="Accounting / Finance"
                    count={2}
                />
                <CategoryCard
                    Icon={DesignerIcon}
                    title="Grapich Designer"
                    count={3}
                />
                <CategoryCard
                    Icon={DigmartIcon}
                    title="Digital Marketing Specialist"
                    count={1}
                />{" "}
                <CategoryCard
                    Icon={CopyWriterIcon}
                    title="Copy Writer"
                    count={2}
                />{" "}
                <CategoryCard
                    Icon={SalesIcon}
                    title="Sales / Marketing"
                    count={3}
                />{" "}
                <CategoryCard
                    Icon={EditorIcon}
                    title="Vedeo Grapher / Editor"
                    count={2}
                />
            </div>
            <div className="flex w-full justify-center">
                <button className="bg-[#E1D123] py-2 px-4 rounded-md text-md font-semibold">
                    Browse All Categories
                </button>
            </div>
        </section>
    );
};

export default PopularCategories;
