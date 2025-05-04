"use client";
import React from "react";

import useBlobity from "../components/blobity/useBlobity";

import Blur from "../components/overlay/Blur";
import Color from "../components/overlay/Color";

import NavBar from "../sections/NavBar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Work from "../sections/Work";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Tools from "../sections/Tools.tsx";

export default function Projects() {

    useBlobity(
        {
            licenseKey: "opensource",
            focusableElementsOffsetX: 4,
            focusableElementsOffsetY: 4,
            color: "#ffffff",
            dotColor: "#ffffff",
            invert: true,
            focusableElements:
                "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
            font: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 900,
            opacity: 1.0,
            fontColor: "#ffffff",
            zIndex: 35,
            size: 50,
            radius: 5,
            magnetic: false,
        }
    );

    return (
        <>
            <Blur />
            <Color />
            <NavBar />
            <main
                className="flex flex-col items-center justify-center bg-black"
            >
                <Hero title="Mes Projets" />
                <About />
                <Work />
                <Tools />
                <Contact />
                <Footer />
            </main>

        </>
    );
}
