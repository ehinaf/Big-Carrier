import React from "react";

const SearchJob = () => {
    return (
        <div className="w-full flex relative">
            <div className="flex w-[90%]">
                <div className="w-1/3 grid gap-5">
                    <label className="w-max bg-white bg-opacity-[0.07] text-white px-3 py-2 rounded-md border-[0.5px] border-white border-opacity-15">
                        Pekerjaan apa yang kamu cari?
                    </label>
                    <input
                        type="text"
                        className="rounded-l-md py-7 border-r-[0.5px] border-gray-500 border-opacity-50 focus:border-r-[0.5px] focus:border-gray-500 
                                    focus:border-opacity-50 border-0 focus:ring-0 text-gray-500 text-lg"
                        placeholder="Cari..."
                    />
                </div>
                <div className="w-1/3 grid gap-5">
                    <label className="w-max bg-white bg-opacity-[0.07] text-white px-3 py-2 rounded-md border-[0.5px] border-white border-opacity-15">
                        Lokasi
                    </label>
                    <input
                        type="text"
                        className="py-7 border-r-[0.5px] border-gray-500 border-opacity-50 focus:border-r-[0.5px] focus:border-gray-500 
                                    focus:border-opacity-50 border-0 focus:ring-0 text-gray-500 text-lg"
                        placeholder="Cari..."
                    />
                </div>
                <div className="w-1/3 grid gap-5">
                    <label className="w-max bg-white bg-opacity-[0.07] text-white px-3 py-2 rounded-md border-[0.5px] border-white border-opacity-15">
                        Kategori
                    </label>
                    <input
                        type="text"
                        className="py-7 border-r-[0.5px] border-gray-500 border-opacity-0 focus:border-r-[0.5px] focus:border-gray-500 
                                    focus:border-opacity-0 border-0 focus:ring-0 text-gray-500 text-lg"
                        placeholder="Semua Kategori"
                    />
                </div>
            </div>
            <div className=" absolute right-0 bottom-0 flex w-[10%] bg-white h-[84px] justify-center items-center rounded-r-md">
                <button className="bg-[#E1D123] py-4 px-6 rounded-md text-lg font-semibold">
                    Cari
                </button>
            </div>
        </div>
    );
};

export default SearchJob;
