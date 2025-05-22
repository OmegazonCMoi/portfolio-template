"use client";

import ProjectGrid from "../components/work/ProjectGrid.tsx";
import React from "react";
import Link from "next/link";
import AnimatedBody from "../animations/AnimatedBody.tsx";

interface WorkProps {
    showAll?: boolean;
}

const Work = ({ showAll = false }: WorkProps) => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
            id="work"
        >
            <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
                Projets en vedette
            </h2>

            <ProjectGrid showAll={showAll} />

            {!showAll && (
                <div className="mt-8">
                    <Link
                        href="/work"
                        className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        <AnimatedBody text="Voir tous mes projets" />
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Work;
