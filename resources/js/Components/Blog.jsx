import React from "react";
import BlogCard from "./Card/BlogCard";
import BlogImage1 from "../../../public/assets/img/blog-image1.png";
import BlogImage2 from "../../../public/assets/img/blog-image2.png";
import BlogImage3 from "../../../public/assets/img/blog-image3.png";

const Blog = () => {
    return (
        <section className="w-full px-52 py-20 border-b-2 border-gray-100">
            <div className="mb-14 text-center">
                <h2 className="text-3xl font-semibold mb-4">Our Blog</h2>
                <p className="text-xl text-gray-400">
                    Ketahui cara memanfaatkan peluang saat melamar pekerjaan
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <BlogCard
                    image={BlogImage1}
                    title="Tips dan Trik untuk Mendapatkan Pekerjaan Impian di Era Digital"
                    date="October 25, 2023"
                    description="Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable"
                />
                <BlogCard
                    image={BlogImage2}
                    title="10 Posisi yang Paling Dibutuhkan di Pasar Kerja Tahun 2024"
                    date="October 25, 2023"
                    description="Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                />
                <BlogCard
                    image={BlogImage3}
                    title="Panduan Lengkap Membuat CV yang Menarik Perhatian Rekruter"
                    date="October 25, 2023"
                    description="One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his"
                />
            </div>
        </section>
    );
};

export default Blog;
