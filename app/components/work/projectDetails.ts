import {
    SiCss3,
    SiHtml5, SiIonos,
    SiNextdotjs, SiPhp,
    SiSqlite, SiSymfony,
    SiTailwindcss,
    SiTypescript, SiVercel,
    SiWix,
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Groupe Mermoz",
        description:
            "Création d'un site vitrine pour le Groupe Mermoz lors de mon stage de 2 mois chez eux. Le site est développé avec le CMS Wix.",
        technologies: [SiWix, SiIonos],
        techNames: ["Wix", "Ionos"],
        techLinks: ["https://www.wix.com/", "https://ionos.com/"],
        demo: "https://www.groupe-mermoz.fr/",
        image: "/projects/mermoz.png",
        available: true,
    },
    {
        id: 1,
        name: "FMenoni",
        description:
            "Un site web pour ma société de développement web. Le site est développé avec NextJS et TailwindCSS.",
        technologies: [SiNextdotjs, SiTailwindcss, SiVercel, SiTypescript],
        techNames: ["NextJS", "TailwindCSS", "Vercel", "TypeScript"],
        techLinks: ["https://nextjs.org/", "https://tailwindcss.com/", "https://vercel.com/", "https://www.typescriptlang.org/"],
        demo: "https://fmenoni.com",
        image: "/projects/fmenoni.png",
        available: true,
    },
    {
        id: 2,
        name: "Forum Cybersécurité",
        description:
            "Le site du forum de cybersécurité développé avec NextJS et TailwindCSS.",
        technologies: [SiNextdotjs, SiTailwindcss],
        techNames: ["NextJS", "TailwindCSS"],
        techLinks: ["https://nextjs.org/", "https://tailwindcss.com/"],
        demo: "https://forum.lycee-faure.fr",
        image: "/projects/forum.png",
        available: true,
    },
    {
        id: 3,
        name: "Minimalist Projects",
        description:
            "Un site web pour de petits projets minimalistes. Le site est développé avec NextJS et TailwindCSS.",
        technologies: [SiNextdotjs, SiTailwindcss, SiVercel, SiTypescript],
        techNames: ["NextJS", "TailwindCSS", "Vercel", "TypeScript"],
        techLinks: ["https://nextjs.org/", "https://tailwindcss.com/", "https://vercel.com/", "https://www.typescriptlang.org/"],
        demo: "https://my-projects-fabmen.vercel.app",
        image: "/projects/minimalist.png",
        available: true,
    },
    {
        id: 4,
        name: "Excel Formatter",
        description:
            "Un outil pour formater des numéros de téléphone dans Excel. Le site est développé avec NextJS et TailwindCSS.",
        technologies: [SiNextdotjs, SiTailwindcss, SiVercel, SiTypescript],
        techNames: ["NextJS", "TailwindCSS", "Vercel", "TypeScript"],
        techLinks: ["https://nextjs.org/", "https://tailwindcss.com/", "https://vercel.com/", "https://www.typescriptlang.org/"],
        demo: "https://converter-ten-delta.vercel.app/",
        image: "/projects/format.png",
        available: true,
    },
    {
        id: 5,
        name: "Excel to JSON",
        description:
            "Un outil pour convertir des fichiers Excel en JSON. Le site est développé avec NextJS et TailwindCSS.",
        technologies: [SiNextdotjs, SiTailwindcss, SiVercel, SiTypescript],
        techNames: ["NextJS", "TailwindCSS", "Vercel", "TypeScript"],
        techLinks: ["https://nextjs.org/", "https://tailwindcss.com/", "https://vercel.com/", "https://www.typescriptlang.org/"],
        demo: "https://excel-to-json-pi.vercel.app/",
        image: "/projects/json.png",
        available: true,
    },
    {
        id: 6,
        name: "Projet Picasso",
        description:
            "Un projet de développement d'une application web pour le lycée. Le site est développé en HTML, CSS, PHP, SQL.",
        technologies: [SiHtml5, SiCss3, SiPhp, SiSqlite],
        techNames: ["HTML", "CSS", "PHP", "SQL"],
        techLinks: ["https://www.w3schools.com/html/", "https://www.w3schools.com/css/", "https://www.php.net/", "https://www.sqlite.org/"],
        demo: "https://drive.google.com/file/d/14IT3vKqPMpCcYsrKGQhpID7extAsoHsM/view?usp=sharing",
        image: "/projects/picasso.png",
        available: true,
    },
    {
        id: 7,
        name: "GSB Frais",
        description:
            "Un projet de développement d'une application web pour le lycée. Le site est développé en Symfony.",
        technologies: [SiPhp, SiSymfony],
        techNames: ["PHP", "Symfony"],
        techLinks: ["https://www.php.net/", "https://symfony.com/"],
        demo: "https://drive.google.com/file/d/1rQ2a5z3q3g0Z5v4e6n7v7f7f7f7f7f7/view?usp=sharing",
        image: "/projects/gsb.png",
        available: true,
    }
];
