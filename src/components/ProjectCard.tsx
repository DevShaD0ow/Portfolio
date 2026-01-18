"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    video: string;
    slug: string;
    onClick: () => void;
}

export default function ProjectCard({ title, description, tags, image, video, slug, onClick }: ProjectCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            setIsPlaying(true);
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => { });
            }
        }
    };

    const handleMouseLeave = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full"
        >
            <div
                className="block group h-full cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
            >
                <div
                    className="relative h-full flex flex-col bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-violet-500 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="relative aspect-video overflow-hidden bg-black">
                        <img
                            src={image}
                            alt={title}
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <video
                            ref={videoRef}
                            src={video}
                            muted
                            loop
                            playsInline
                            preload="none"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/20 transition-colors duration-500 pointer-events-none" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                                {title}
                            </h3>
                            <svg
                                className="w-5 h-5 text-gray-500 group-hover:text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300">
                            {description}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-black/40 text-violet-300 border border-violet-500/20 group-hover:border-violet-500/50 transition-colors duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}