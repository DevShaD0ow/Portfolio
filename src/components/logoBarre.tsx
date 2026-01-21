import React from 'react';

interface TechBarProps {
    title?: string;
    bgColor?: string;
    textColor?: string;
    speed?: number; // en secondes
}

const TechItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div className="tech-item flex items-center gap-[0.75rem] font-bold text-[1.25rem] opacity-40 transition-all duration-300 hover:opacity-100 hover:text-black whitespace-nowrap cursor-default">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {icon}
        </svg>
        {label}
    </div>
);

const TechBar: React.FC<TechBarProps> = ({
    title = "Construit avec les meilleures technologies",
    bgColor = "#ffffff",
    textColor = "#000000",
    speed = 40,
}) => {

    const techData = [
        { label: "React", icon: <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" opacity="0" /><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.222c3.086 0 5.86 1.41 7.732 3.633l-1.636 1.636A8.778 8.778 0 0 0 12 4.444c-4.832 0-8.778 3.946-8.778 8.778 0 1.944.636 3.737 1.706 5.196l-1.572 1.572A10.957 10.957 0 0 1 1.111 12C1.111 5.986 5.986 1.111 12 1.111zm7.732 16.034l1.636 1.636A10.957 10.957 0 0 1 12 22.889c-6.014 0-10.889-4.875-10.889-10.889 0-2.478.83-4.773 2.222-6.618l1.572 1.572A8.778 8.778 0 0 0 12 19.556c4.832 0 8.778-3.946 8.778-8.778 0-1.944-.636-3.737-1.706-5.196z" /><circle cx="12" cy="12" r="2" /></> },
        { label: "Tailwind", icon: <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /> },
        { label: "Three.js", icon: <path d="M8 22l-6-10L8 2l12 7-5 13H8zm.7-2h5.6l4.2-11-10.5-6L3.3 12l5.4 8z" /> },
        { label: "Shopify", icon: <><path d="M20.8 12.5c0 3.7-2.6 6.8-6.1 7.7L12 22l-2.7-1.8c-3.5-.9-6.1-4-6.1-7.7 0-4.4 3.6-8 8-8s8 3.6 8 8z" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></> },
        { label: "Figma", icon: <path d="M8.5 2c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5h3.5V5.5c0-1.93-1.57-3.5-3.5-3.5zM8.5 9C6.57 9 5 10.57 5 12.5S6.57 16 8.5 16H12v-3.5c0-1.93-1.57-3.5-3.5-3.5zM12 16h3.5c1.93 0 3.5-1.57 3.5-3.5S17.43 9 15.5 9H12v7zM5 19.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V16H8.5c-1.93 0-3.5 1.57-3.5 3.5zM15.5 2h-3.5v7h3.5c1.93 0 3.5-1.57 3.5-3.5S17.43 2 15.5 2z" /> }
    ];

    const fullList = [...techData, ...techData, ...techData, ...techData];

    return (
        <section
            className="relative overflow-hidden z-[2] mt-[70px] border-y border-white/5 py-0 font-sans"
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <div className="text-center mb-4">
                <p className="text-[0.875rem] font-semibold uppercase tracking-wider opacity-50 m-0">
                    {title}
                </p>
            </div>

            <div className="marquee-wrapper relative w-full overflow-hidden">
                {/* Masque de dégradé pour les bords */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-transparent"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}>
                </div>

                <div
                    className="marquee-track flex gap-16 w-max animate-scroll hover:[animation-play-state:paused]"
                    style={{
                        animationDuration: `${speed}s`,
                    }}
                >
                    {fullList.map((item, index) => (
                        <TechItem key={index} label={item.label} icon={item.icon} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
        </section>
    );
};

export default TechBar;