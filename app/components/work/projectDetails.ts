import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiIonos, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript, SiVercel,
    SiWebgl, SiWix,
    SiZig
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
];
