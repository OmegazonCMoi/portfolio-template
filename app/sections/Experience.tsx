import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const experiences = [
    {
        title: "Stagiaire en Implémentation et Personnalisation d'Odoo",
        company: "Groupe Mermoz",
        location: "La Roche sur Foron, France",
        time: "Janvier 2025 – Mars 2025",
        description: [
            "Accompagnement de l'intégration d'Odoo.",
            "Amélioration de l'UX/UI du site web.",
        ],
    },
    {
        title: "Assistant d'Accueil et Responsable Entretien",
        company: "MK Circuit",
        location: "Scientrier, France",
        time: "Août 2024 – Août 2024",
        description: [
            "Accueil des clients et gestion de la caisse.",
            "Gestion des stocks des produits présents sur le site.",
        ],
    },
    {
        title: "Stagiaire en Refonte Digitale et Développement Web",
        company: "Groupe Mermoz",
        location: "Remote",
        time: "Juin 2024 - Juillet 2024",
        description: [
            "Refonte du site web du Groupe Mermoz.",
            "Maintiens du Linkedin du Groupe Mermoz.",
            "Réalisation de divers projets internes.",
        ],
    },
    {
        title: "Stagiaire en Développement Numérique et Gestion Administrative",
        company: "Herrmann Ultrasons",
        location: "Eteaux, France",
        time: "Juin 2023 – Juillet 2023",
        description: [
            "Réalisation d'un site web interne.",
            "Gestion administrative de l'entreprise.",
        ],
    },
    {
        title: "Secrétaire Dévoué aux Rites Administratifs et à la Gestion des Actes Officiels",
        company: "Savoie Piece Auto",
        location: "La Roche sur Foron, France",
        time: "Novembre 2022 – Novembre 2022",
        description: [
            "Assistance active aux différents services administratifs.",
            "Contribution à la gestion des processus de retour de marchandises.",
            "Gestion des factures et le suivi des opérations financières courantes",
        ],
    },
    {
        title: "Collaborateur aux Responsabilités de Gestion de la Logistique Hiérarchique",
        company: "Mairie de Scientrier",
        location: "Scientrier, France",
        time: "Juin 2022 – Juin 2022",
        description: [
            "Participation activement à l'élaboration et à l'organisation d'une photothèque municipale.",
            "Gestion de documents officiels et la coordination d'activités internes.",
        ],
    },
    {
        title: "Collaborateur Stagiaire en Métiers de l’Ordonnancement et des Procédures",
        company: "Signoud Menager",
        location: "La Roche sur Foron, France",
        time: "Septembre 2021 – Octobre 2021",
        description: [
            "Entretien et à organisation méticuleuse des espaces.",
            "Réception des appels téléphoniques.",
        ],
    },
    {
        title: "Stagiaire en Préceptorat Administratif et Gouvernance Opérationnelle",
        company: "Imprimerie Uberti-Jourdan",
        location: "Bonneville, France",
        time: "Juin 2021 – Juin 2021",
        description: [
            "Accueil des clients avec la plus grande courtoisie.",
            "Classement scrupuleux des archives et à organisation méthodique des informations.",
        ],
    },
    {
        title: "Apprenti Intendant aux Affaires de Gestion Institutionnelle",
        company: "DM Peinture",
        location: "Éteaux, France",
        time: "Novembre 2020 – Décembre 2020",
        description: [
            "Assistance à la relation client et au suivi des échanges.",
            "Appui discret mais assidu au dirigeant dans la conduite de certaines responsabilités administratives.",
        ],
    },
];

const Experience = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="experience"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Expérience professionnelle"}
                    className={
                        "mb-10 text-left self-start text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="flex w-full flex-col gap-12 text-[#e4ded7] pr-[20em]">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="flex flex-col pb-8 border-b border-b-gray-800"
                        >
                            <div className="flex justify-between items-center">
                                <AnimatedBody
                                    delay={index * 0.2}
                                    text={`${exp.company}`}
                                    className="text-2xl font-bold text-white"
                                />
                                <AnimatedBody
                                    delay={index * 0.2 + 0.05}
                                    text={`${exp.time}`}
                                    className="text-sm"
                                />
                            </div>
                            <AnimatedBody
                                delay={index * 0.2 + 0.1}
                                text={`${exp.title}`}
                                className="text-lg text-indigo-400 mb-2"
                            />
                            {exp.description.map((line, i) => (
                                <AnimatedBody
                                    key={i}
                                    delay={index * 0.2 + 0.15 + i * 0.05}
                                    text={`• ${line}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
