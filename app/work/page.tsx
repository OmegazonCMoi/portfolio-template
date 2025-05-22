"use client";

import React from "react";
import Hero from "../sections/Hero.tsx";
import Work from "../sections/Work.tsx";
import NavBar from "../sections/NavBar.tsx";
import Blur from "../components/overlay/Blur.tsx";
import Color from "../components/overlay/Color.tsx";
import Footer from "../sections/Footer.tsx";

const WorkPage = () => {
    return (
        <div className="min-h-screen overflow-y-auto">
            <Blur />
            <Color />
            <NavBar />
            <main className="flex flex-col items-center justify-center bg-black min-h-screen">
                <Hero title="Mes projets" />
                <Work showAll={true} />
                <Footer />
            </main>
        </div>
    );
};

export default WorkPage; 