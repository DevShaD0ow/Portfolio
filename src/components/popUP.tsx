import { AnimatePresence, motion } from "framer-motion";
import { Github, X, Globe } from "lucide-react";

export default function PopUP({ selectedProject, setSelectedProject }: { selectedProject: any, setSelectedProject: any }) {

    const isGitHubLink = (url: string) => url.includes("github.com");

    return (
        <AnimatePresence>
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-neutral-950 border border-white/10 rounded-3xl shadow-2xl custom-scrollbar"
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
                        >
                            <X size={24} />
                        </button>

                        {/* Contenu Hero du projet */}
                        <div className="relative h-[40vh] md:h-[50vh] w-full">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                            <div className="absolute bottom-8 left-8 md:left-12">
                                <div className="text-violet-400 font-bold tracking-tighter mb-2 uppercase text-sm">Projet Focus</div>
                                <h2 className="text-4xl md:text-6xl font-bold font-sans">{selectedProject.title}</h2>
                            </div>
                        </div>

                        {/* Détails du projet 📄 */}
                        <div className="p-8 md:p-12 space-y-16">

                            {/* Section Objectifs */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white border-l-4 border-violet-500 pl-4">Objectifs du Projet</h3>
                                    <p className="text-neutral-400 leading-relaxed text-lg">
                                        {selectedProject.description}
                                    </p>
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-violet-500 hover:text-white transition-all"
                                    >
                                        {isGitHubLink(selectedProject.github) ? (
                                            <>
                                                <Github size={20} /> Voir sur GitHub
                                            </>
                                        ) : (
                                            <>
                                                <Globe size={20} /> Voir le site
                                            </>
                                        )}
                                    </a>

                                </div>
                                <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 aspect-video">
                                    <video src={selectedProject.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/5 rounded-2xl border border-white/5">
                                <div className="space-y-1">
                                    <p className="text-neutral-500 text-xs uppercase font-bold tracking-widest">Logiciels</p>
                                    <p className="text-white font-medium">Unity / Unreal / Web</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-neutral-500 text-xs uppercase font-bold tracking-widest">Rôle</p>
                                    <p className="text-white font-medium">Lead Developer</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-neutral-500 text-xs uppercase font-bold tracking-widest">Technologies</p>
                                    <p className="text-white font-medium">{selectedProject.tags.join(", ")}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-neutral-500 text-xs uppercase font-bold tracking-widest">Status</p>
                                    <p className="text-emerald-400 font-medium">Terminé</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}