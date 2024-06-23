import React from "react";
import Avatar1 from "../../../../public/assets/img/avatar1.png";

const TestimoniCard = () => {
    return (
        <>
            <div className="col-span-1">
                <div className="p-10 rounded-lg mb-14">
                    <p className="text-gray-300 text-justify ">
                        "Website lowongan pekerjaan ini benar-benar membantu
                        saya menemukan peluang karir yang sesuai dengan keahlian
                        saya. Saya merasa didukung sepanjang proses pencarian
                        kerja, mulai dari persiapan wawancara hingga negosiasi
                        gaji."
                    </p>
                </div>
                <div className="flex w-full justify-center mb-5">
                    <img
                        src={Avatar1}
                        alt="avatar"
                        width={80}
                        height={80}
                        className="rounded-full object-contain opacity-50"
                    />
                </div>
                <h5 className="text-xl font-medium text-center text-gray-400">
                    Siti Rahmawati
                </h5>
                <p className="text-md text-gray-300 text-center">Joobseeker</p>
            </div>
            <div className="col-span-1 w-full">
                <div className="relative p-10 bg-gray-800 rounded-lg mb-14">
                    <p className="text-white text-justify ">
                        "Proses melamar melalui website ini sangat mudah dan
                        user-friendly. Saya sangat terbantu dengan berbagai tips
                        yang diberikan di artikel-artikel mereka, terutama
                        mengenai cara membuat CV yang menarik."
                    </p>
                    <div class="absolute bottom-[-15px] right-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-gray-800 border-r-[15px] border-r-transparent"></div>
                </div>

                <div className="flex w-full justify-center mb-5">
                    <img
                        src={Avatar1}
                        alt="avatar"
                        width={80}
                        height={80}
                        className="rounded-full object-contain"
                    />
                </div>
                <h5 className="text-xl font-medium text-center">
                    Andi Pratama
                </h5>
                <p className="text-md text-gray-500 text-center">Joobseeker</p>
            </div>
            <div className="col-span-1">
                <div className="p-10 rounded-lg mb-14">
                    <p className="text-gray-300 text-justify ">
                        "Saya sangat berterima kasih kepada tim website ini.
                        Mereka tidak hanya menyediakan informasi lowongan
                        pekerjaan yang up-to-date, tetapi juga memberi saran
                        yang berguna tentang tren industri."
                    </p>
                </div>
                <div className="flex w-full justify-center mb-5">
                    <img
                        src={Avatar1}
                        alt="avatar"
                        width={80}
                        height={80}
                        className="rounded-full object-contain opacity-50"
                    />
                </div>
                <h5 className="text-xl font-medium text-center text-gray-400">
                    Budi Santoso
                </h5>
                <p className="text-md text-gray-300 text-center">
                    HR Specialist
                </p>
            </div>
        </>
    );
};

export default TestimoniCard;
