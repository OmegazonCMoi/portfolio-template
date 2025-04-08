import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Présentation générale"}
                    className={
                        "mb-10 text-left self-start text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Bonjour, je m'appelle Fabian Menoni, j'ai 18 ans, et je suis passionné par l'informatique, en particulier le développement full-stack. Depuis plusieurs années, j'explore comment créer des applications web complètes, du front-end au back-end, en utilisant des technologies modernes." />

                        <AnimatedBody
                            delay={0.1}
                            text="Ce qui me motive, c'est la capacité de résoudre des problèmes complexes et de voir les résultats concrets de mon travail. J'aime particulièrement apprendre et expérimenter avec des frameworks comme React et Symfony pour créer des projets innovants et fonctionnels."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Je continue à développer mes compétences et à me tenir au courant des dernières tendances en informatique, toujours prêt à relever de nouveaux défis dans ce domaine en constante évolution."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
