"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ContactSection() {
    const { isEnglish } = useLanguage();
    const t = translations[isEnglish ? "en" : "fr"];

    const contactTexts = {
        title: isEnglish ? "Contact Me" : "Me Contacter",
        subtitle: isEnglish
            ? "Have a project in mind or just want to chat? Feel free to contact me, I'll be happy to talk with you! 🚀"
            : "Vous avez un projet en tête ou souhaitez simplement discuter ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous ! 🚀",
        download: isEnglish ? "Download" : "Télécharger"
    };

    const contacts = [
        {
            icon: Mail,
            label: "Email",
            value: "alexistirant76@gmail.com",
            href: "mailto:alexistirant76@gmail.com",
            color: "from-blue-400 to-cyan-400"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "/AlexisTirant",
            href: "https://linkedin.com/in/alexis-tirant",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Github,
            label: "GitHub",
            value: "@DevShaD0ow",
            href: "https://github.com/DevShaD0ow",
            color: "from-gray-400 to-gray-600"
        },
        {
            icon: FileText,
            label: "CV",
            value: contactTexts.download,
            href: "./assets/cv_alexis_tirant.pdf",
            color: "from-violet-400 to-fuchsia-600"
        }
    ];

    return (
        <section id="contact" className="mb-16 max-w-4xl mx-auto scroll-mt-24 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600 inline-block pt-8">
                        {contactTexts.title}
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <motion.a
                                key={index}
                                href={contact.href}
                                target={contact.href.startsWith("http") ? "_blank" : undefined}
                                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                <div className="relative flex items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} shadow-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-sm text-neutral-400 mb-1">{contact.label}</p>
                                        <p className="text-white font-medium group-hover:text-violet-400 transition-colors">
                                            {contact.value}
                                        </p>
                                    </div>

                                    <svg
                                        className="w-5 h-5 text-neutral-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="mt-12 text-center"
                >
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        {contactTexts.subtitle}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}