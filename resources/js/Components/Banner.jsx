import React from "react";

const Banner = ({ banner }) => {
    if (banner == "banner1") {
        return (
            <section className='w-full h-[500px] bg-cover relative bg-center  bg-[url("/assets/img/banner-big.png")]'></section>
        );
    }

    if (banner == "banner2") {
        return (
            <section className='w-full h-60 bg-cover relative  bg-[url("/assets/img/banner2.jpg")]'>
                <div className="absolute top-0 left-0 w-full h-full bg-[#1E1E1E] bg-opacity-75">
                    <div className="flex w-full h-full items-center justify-center">
                        <h3 className="text-white text-4xl font-medium">
                            Langkah Awal Menuju Karir Impian Anda
                        </h3>
                    </div>
                </div>
            </section>
        );
    }
};

export default Banner;
