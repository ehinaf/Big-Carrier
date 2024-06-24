import React from "react";
import { Head } from "@inertiajs/react";

import Hero from "@/Components/Hero";
import PopularCategories from "@/Components/PopularCategories";
import Header from "@/Layouts/LandingPage/Header";
import RecentJobs from "@/Components/RecentJobs";
import FeatureJobs from "@/Components/FeatureJobs";
import Banner from "@/Components/Banner";
import Testimoni from "@/Components/Testimoni";
import Blog from "@/Components/Blog";
import Footer from "@/Layouts/LandingPage/Footer";

const Home = (props) => {
    console.log(props);
    return (
        <>
            <Head title="Home" />
            <Header auth={props.auth} />
            <Hero />
            <PopularCategories />
            <div className="grid grid-cols-3 px-52 py-20 gap-5">
                <RecentJobs />
                <FeatureJobs />
            </div>
            <Banner banner="banner1" />
            <Testimoni />
            <Blog />
            <Banner banner="banner2" />
            <Footer />
        </>
    );
};

export default Home;
