import React from 'react';

const DownloadApp = () => {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#F8E4D5]">
            {/* Top Nav inside section */}
            <div className="w-full px-12 py-8 flex justify-between items-center relative z-20">
                <div className="flex items-center gap-2">
                    <img src="/logo1.png" alt="logo" className="w-auto h-16" />
                </div>
            </div>

            {/* Window pane shadows simulation */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(90deg, transparent 49%, rgba(178, 30, 6, 0.2) 50%, transparent 51%), linear-gradient(0deg, transparent 49%, rgba(178, 30, 6, 0.2) 50%, transparent 51%)',
                        backgroundSize: '40% 40%'
                    }}>
                </div>
            </div>

            <div className="flex-1 container mx-auto px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between pb-20">
                <div className="max-w-xl text-left">
                    <h2 className="text-7xl lg:text-9xl font-bold text-[#1A1A1A] mb-8 tracking-tighter leading-tight">
                        Descarga la app
                    </h2>
                    <p className="text-3xl text-[#B21E06] font-medium opacity-80 uppercase tracking-widest">
                        Proximamente
                    </p>
                </div>

                <div className="relative mt-20 lg:mt-0 flex items-center justify-center">
                    {/* Logo Card - Using the extracted Red */}
                    <div className="absolute -left-28 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#B21E06] rounded-[3.5rem] shadow-2xl flex items-center justify-center transform -rotate-12 z-0">
                        <img src="/logo1.png" alt="F" className="w-32 opacity-20 invert grayscale" />
                    </div>

                    {/* QR Card */}
                    <div className="relative w-96 h-96 bg-white rounded-[4rem] shadow-2xl p-12 flex items-center justify-center transform rotate-6 z-10 border border-[#F8E4D5]">
                        <div className="w-full h-full bg-[#F8E4D5]/30 rounded-3xl flex items-center justify-center overflow-hidden border border-[#B21E06]/10">
                            {/* Simplified QR Code Pattern using the Red color */}
                            <div className="grid grid-cols-8 grid-rows-8 gap-2 w-full h-full p-4">
                                {[...Array(64)].map((_, i) => {
                                    const isEdge = i < 8 || i % 8 === 0 || i % 8 === 7 || i > 55;
                                    const isRandom = Math.random() > 0.4;
                                    return (
                                        <div key={i} className={`rounded-sm ${(isEdge && Math.random() > 0.7) || (!isEdge && isRandom) ? 'bg-[#1A1A1A]' : 'bg-transparent'}`}></div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
