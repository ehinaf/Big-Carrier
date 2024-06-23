import React from "react";
import TestimoniCard from "./Card/TestimoniCard";

const Testimoni = () => {
    return (
        <section className="w-full px-10 py-20 border-b-2 border-gray-100">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-semibold mb-4">
                    Apa Kata Mereka yang Sudah Bergabung 😍
                </h2>
                <p className="text-xl text-gray-400">
                    Lihat Review Jujur dari Para Pelamar
                </p>
            </div>
            <div className="grid grid-cols-3">
                <TestimoniCard />
            </div>
        </section>
    );
};

export default Testimoni;
