import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio.fmenoni.com/"),
    title: "Portfolio Fabian Menoni",
    description:
    "Je suis un développeur web passionné par la création d'applications web modernes et réactives. Mon portfolio présente mes projets, mes compétences et mon parcours professionnel.",
    generator: "Next.js",
    applicationName: "Portfolio template",
    keywords: [
        "Portfolio template",
        "Eldora UI",
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Portfolio Fabian Menoni",
        description:
      "Fabian Menoni est un développeur web passionné par la création d'applications web modernes et réactives. Son portfolio présente ses projets, ses compétences et son parcours professionnel.",
        url: "https://portfolio.fmenoni.com/",
        siteName: "www.fmenoni.com",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Portfolio Fabian Menoni",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio Fabian Menoni",
        description:
      "Fabian Menoni est un développeur web passionné par la création d'applications web modernes et réactives. Son portfolio présente ses projets, ses compétences et son parcours professionnel.",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
