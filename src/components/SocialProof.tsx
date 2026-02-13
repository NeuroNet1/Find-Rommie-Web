import React from 'react';

const SocialProof = () => {
    const activities = [
        { name: "Ana", action: "encontró roomie", time: "hace 2h", avatar: "https://i.pravatar.cc/150?u=ana" },
        { name: "Carlos", action: "matched", time: "hace 45m", avatar: "https://i.pravatar.cc/150?u=carlos" },
        { name: "Sofía", action: "rentó", time: "hoy", avatar: "https://i.pravatar.cc/150?u=sofia" },
        { name: "Sofía", action: "rentó", time: "hoy", avatar: "https://i.pravatar.cc/150?u=sofia2" },
    ];

    return (
        <section className="relative py-32 overflow-hidden bg-[#F8E4D5]">
            {/* Window pane shadows simulation with branding color */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(90deg, transparent 49%, rgba(178, 30, 6, 0.2) 50%, transparent 51%), linear-gradient(0deg, transparent 49%, rgba(178, 30, 6, 0.2) 50%, transparent 51%)',
                        backgroundSize: '40% 40%'
                    }}>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Top Activity Row */}
                <div className="flex flex-wrap justify-center gap-12 mb-24">
                    {activities.slice(0, 3).map((activity, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-md py-3 px-6 rounded-full shadow-lg border border-white/40">
                            <img src={activity.avatar} alt={activity.name} className="w-12 h-12 rounded-full border-2 border-[#B21E06] shadow-sm" />
                            <p className="text-lg font-medium text-[#1A1A1A]">
                                <span className="font-bold">{activity.name}</span> {activity.action} <span className="text-[#B21E06] opacity-70">{activity.time}</span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Partners Row */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-24 px-12">
                    {/* Anahuac */}
                    <div className="flex items-center gap-3 opacity-90 scale-110">
                        <div className="w-12 h-12 bg-[#B21E06] rounded-lg flex items-center justify-center text-[#F8E4D5] font-serif font-bold text-2xl">A</div>
                        <div className="flex flex-col items-start leading-none text-[#1A1A1A]">
                            <span className="text-2xl font-serif font-bold tracking-tight">Anahuac</span>
                            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-bold opacity-60">University</span>
                        </div>
                    </div>

                    <div className="max-w-xl text-center">
                        <h3 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight px-4">
                            Sergio rentó su departamento en menos de una <span className="text-[#B21E06]">semana</span>
                        </h3>
                    </div>

                    <div className="flex items-center gap-10">
                        {/* CHEDRAUI */}
                        <div className="flex items-center gap-2 opacity-90 scale-110 text-[#1A1A1A]">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#B21E06" strokeWidth="2.5">
                                <circle cx="16" cy="10" r="4" />
                                <path d="M8 26V22C8 18 12 16 16 16C20 16 24 18 24 22V26" strokeLinecap="round" />
                            </svg>
                            <span className="font-black text-2xl tracking-tighter">CHEDRAUI</span>
                        </div>

                        {/* ENTERPRISE IRELAND */}
                        <div className="flex items-center gap-2 opacity-90 scale-110 text-[#1A1A1A]">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <div className="absolute inset-0 border-2 border-[#B21E06] rounded-full border-t-transparent animate-spin-slow"></div>
                                <div className="w-2 h-2 bg-[#B21E06] rounded-full"></div>
                            </div>
                            <div className="flex flex-col items-start leading-none gap-0.5">
                                <span className="text-lg font-black tracking-tighter">ENTERPRISE</span>
                                <span className="text-lg font-black tracking-tighter text-[#B21E06]">IRELAND</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Activity Row */}
                <div className="flex flex-wrap justify-center gap-12 opacity-80">
                    {[...activities].reverse().map((activity, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white/40 backdrop-blur-md py-3 px-6 rounded-full shadow-lg border border-white/20">
                            <img src={activity.avatar} alt={activity.name} className="w-12 h-12 rounded-full border-2 border-[#B21E06]/40 shadow-sm" />
                            <p className="text-lg font-medium text-[#1A1A1A]">
                                <span className="font-bold">{activity.name}</span> {activity.action} <span className="text-[#B21E06] opacity-60">{activity.time}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
