import React from "react";

const BlogCard = ({ image, title, date, description }) => {
    return (
        <div className="col-span-1 border border-gray-300 rounded-md h-max">
            <img
                src={image}
                alt="avatar"
                className="object-cover rounded-t-md w-full h-52"
            />

            <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    {title}
                </h3>
                <div className="text-lg text-gray-400 mb-6">{date} </div>
                <p className="text-lg text-gray-500 mb-8">{description}</p>
                <button className="bg-[#E1D123] py-2 px-4 rounded-md text-md font-semibold">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
