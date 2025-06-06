"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";

const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        
        // Si c'est un lien vers une page (commence par /)
        if (href.startsWith('/') && !href.includes('#')) {
            window.location.href = href;
            return;
        }

        // Pour les liens de section sur la même page
        const targetId = href.split('#')[1];
        const element = document.getElementById(targetId);
        
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className="nowrap fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 px-1 py-1 text-nowrap text-[#e4ded7] sm:w-[440px] md:p-2 lg:w-[440px]">
            <Container
                width="125%"
                height="50px"
                color="rgba(255, 255, 255, 0.1)"
                borderRadius={10}
                top="0px"
                left="0px"
                angle={0}
            >
                <nav className="nowrap fixed bottom-30 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[440px] md:p-2 lg:w-[440px]">
                    <Link
                        href="/"
                        data-blobity-magnetic="false"
                        aria-label="Scroll to Home Section"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            ACCUEIL
                        </h4>
                    </Link>

                    <Link
                        href="/#about"
                        data-blobity-magnetic="false"
                        aria-label="Scroll to About Section"
                    >
                        <h4 className="py-2 px-2 text-[12px] text-nowrap sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            À&nbsp;PROPOS
                        </h4>
                    </Link>

                    <Link
                        href="/experiences"
                        data-blobity-magnetic="false"
                        aria-label="Scroll to Experience Section"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            EXPÉRIENCE
                        </h4>
                    </Link>

                    <Link
                        href="/work"
                        data-blobity-magnetic="false"
                        aria-label="Scroll to Work Section"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            PROJETS
                        </h4>
                    </Link>

                    <Link
                        href="/#contact"
                        data-blobity-magnetic="false"
                        aria-label="Scroll to Contact Section"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            CONTACT
                        </h4>
                    </Link>
                </nav>
            </Container>
        </nav>
    );
};

export default NavBar;
