import { Header, Tabs } from "../components"
import { Pause, Square, Volume2, Coffee } from "lucide-react"
import { useEffect, useState } from "react";

const Focus = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="pb-24 md:pb-8 lg:h-screen lg:overflow-hidden lg:flex lg:flex-col xl:h-screen xl:overflow-hidden xl:flex xl:flex-col bg-slate-50/50">
            <Header />

            <main className="max-w-7xl mx-auto w-full px-6 lg:px-24 xl:px-32 py-8 lg:flex-1 lg:flex lg:flex-col lg:justify-center xl:flex-1 xl:flex xl:flex-col xl:justify-center lg:min-h-0 xl:min-h-0 relative">
                <div className="flex flex-col items-center justify-center flex-1">
                    <div className="relative flex items-center justify-center mb-10 lg:mb-14">
                        {/* Dynamic Progress Ring */}
                        <svg className="size-[300px] md:size-[400px] lg:size-[440px] xl:size-[480px] -rotate-90 filter drop-shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                            <circle className="text-slate-100" cx="240" cy="240" fill="transparent" r="220" stroke="currentColor" strokeWidth="8"></circle>
                            <circle className="text-green-500 transition-all duration-1000 ease-in-out" cx="240" cy="240" fill="transparent" r="220" stroke="currentColor" strokeDasharray="1382" strokeDashoffset="345" strokeLinecap="round" strokeWidth="12"></circle>
                        </svg>

                        {/* Timer Display */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-800 tracking-tighter tabular-nums">24:59</span>
                            <div className="flex items-center gap-2 mt-4 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                                <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-green-600 text-[10px] font-black uppercase tracking-[0.2em]">Focus Mode</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Current Mission</h3>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 leading-tight mb-8 lg:mb-12">
                            Complete the Bento UI Design System Prototype
                        </h1>

                        {/* Controls */}
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <button className="flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold transition-all shadow-xl shadow-slate-200/40 hover:scale-105 active:scale-95 group">
                                <Pause size={24} className="group-hover:text-green-500 transition-colors" />
                                Pause Session
                            </button>
                            <button className="flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl bg-red-50 hover:bg-red-100 border border-red-100 text-red-500 font-bold transition-all shadow-xl shadow-red-200/20 hover:scale-105 active:scale-95 group">
                                <Square size={20} fill="currentColor" />
                                End Session
                            </button>
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8 lg:mt-12 gap-8">
                    <div className="flex items-center gap-4 bg-white/80 p-5 rounded-3xl border border-slate-200/50 backdrop-blur-xl shadow-2xl shadow-slate-200/20 w-full md:w-auto">
                        <button className="text-slate-400 hover:text-green-500 transition-colors p-1">
                            <Volume2 size={24} />
                        </button>
                        <div className="w-32 md:w-48 h-2.5 bg-slate-100 rounded-full relative overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-green-500 w-1/2 rounded-full"></div>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg ml-2">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Lofi Rain</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 bg-white/80 p-5 rounded-3xl border border-slate-200/50 backdrop-blur-xl shadow-2xl shadow-slate-200/20 w-full md:w-auto">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Upcoming Break</p>
                            <p className="text-sm lg:text-base font-bold text-slate-800">05:00 • Short Break</p>
                        </div>
                        <div className="size-14 rounded-2xl bg-green-50 flex items-center justify-center border border-green-100 shadow-sm text-green-600">
                            <Coffee size={28} />
                        </div>
                    </div>
                </div>
            </main>

            {/* Ambient Background Blur */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-green-400 opacity-[0.05] blur-[160px] pointer-events-none rounded-full -z-10"></div>

            {isMobile ? <Tabs /> : null}
        </div>
    )
}

export default Focus