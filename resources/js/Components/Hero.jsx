import React from "react";
import SearchJob from "./SearchJob";

const Hero = () => {
    return (
        <section className='w-full h-[600px] bg-cover relative bg-center  bg-[url("/assets/img/hero-image.jpg")]'>
            <div className="absolute top-0 left-0 w-full h-full bg-[#1E1E1E] bg-opacity-70 px-52 py-40">
                <div className="flex flex-col items-start">
                    <h1 className="text-white mb-2 text-5xl font-semibold text-center">
                        Temukan Lowongan
                    </h1>
                    <p className="text-2xl  text-center text-white">
                        Jadilah Bagian dari Perusahaan Kami
                    </p>
                </div>
                <div className="mt-14">
                    <SearchJob />
                </div>
            </div>
        </section>
    );
};

export default Hero;
