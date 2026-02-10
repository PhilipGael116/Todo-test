import Header from "../components/Header";
import Tabs from "../components/Tabs";
import { useEffect, useState } from "react";


const Home = () => {
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
        <div>
            <Header />

            <main className="max-w-7xl mx-auto w-full px-6 py-10">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-1">Thursday, Oct 24</p>
                        <h1 className="text-slate-900 text-4xl font-black tracking-tight">Ready to focus, Alex?</h1>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
                            <span className="material-symbols-outlined text-lg">add</span>
                            New Task
                        </button>
                    </div>
                </div>

                <div className="grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-6 lg:grid-cols-2 md:grid-cols-1">

                    <div className="col-span-1 md:col-span-2 row-span-2 bg-primary rounded-2xl p-8 text-white relative overflow-hidden group shadow-2xl shadow-primary/30">
                        <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <span className="material-symbols-outlined text-[240px]">rocket_launch</span>
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">High Priority</span>
                                <span className="text-white/70 text-sm font-medium">Due in 2h</span>
                            </div>
                            <h3 className="text-slate-200 text-lg font-semibold mb-2">Main Focus of the Day</h3>
                            <h2 className="text-4xl font-black leading-tight mb-8">Complete the Bento UI Design System Prototype</h2>
                            <div className="mt-auto flex items-center justify-between gap-4">
                                <div className="flex -space-x-3">
                                    <div className="size-10 rounded-full border-2 border-primary bg-slate-200 overflow-hidden" data-alt="Teammate avatar"></div>
                                    <div className="size-10 rounded-full border-2 border-primary bg-slate-300 overflow-hidden" data-alt="Teammate avatar"></div>
                                    <div className="size-10 rounded-full border-2 border-primary bg-slate-400 flex items-center justify-center text-xs font-bold">+2</div>
                                </div>
                                <button className="bg-white text-primary hover:bg-slate-100 px-6 py-3 rounded-xl font-extrabold transition-all">
                                    Complete Task
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                        <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">Momentum</h3>
                        <div className="relative size-32 flex items-center justify-center mb-4">
                            <svg className="size-full -rotate-90">
                                <circle className="text-slate-100" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" stroke-width="8"></circle>
                                <circle className="text-accent-mint" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" stroke-dasharray="364" stroke-dashoffset="91" stroke-width="8"></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-black text-slate-900 leading-none">75%</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase">Done</span>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm font-medium">9 of 12 tasks completed</p>
                    </div>

                    <div className="col-span-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest">Next Up</h3>
                            <span className="material-symbols-outlined text-slate-400 cursor-pointer">more_horiz</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="size-5 rounded border-2 border-slate-200 group-hover:border-primary transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px] text-primary opacity-0 group-hover:opacity-100">check</span>
                                </div>
                                <span className="text-slate-700 text-sm font-semibold truncate">Refine typography scale</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="size-5 rounded border-2 border-slate-200 group-hover:border-primary transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px] text-primary opacity-0 group-hover:opacity-100">check</span>
                                </div>
                                <span className="text-slate-700 text-sm font-semibold truncate">Client feedback sync</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="size-5 rounded border-2 border-primary bg-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px] text-white">check</span>
                                </div>
                                <span className="text-slate-400 text-sm font-medium line-through truncate">Icon set export</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="size-5 rounded border-2 border-slate-200 group-hover:border-primary transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px] text-primary opacity-0 group-hover:opacity-100">check</span>
                                </div>
                                <span className="text-slate-700 text-sm font-semibold truncate">Email Newsletter draft</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 bg-accent-purple rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg shadow-accent-purple/20">
                        <div>
                            <h3 className="text-white/70 text-sm font-bold uppercase tracking-widest mb-2">Quick Capture</h3>
                            <p className="text-lg font-bold leading-snug">Got an idea? Save it instantly with voice.</p>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="size-16 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all">
                                <span className="material-symbols-outlined text-3xl">mic</span>
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Tap to record</span>
                        </div>
                    </div>

                    <div className="col-span-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Activity</h3>
                        <div className="flex items-end justify-between h-24 gap-1">
                            <div className="w-full bg-slate-100 rounded-t-sm h-[40%]"></div>
                            <div className="w-full bg-slate-100 rounded-t-sm h-[60%]"></div>
                            <div className="w-full bg-primary/40 rounded-t-sm h-[90%]"></div>
                            <div className="w-full bg-primary rounded-t-sm h-[75%]"></div>
                            <div className="w-full bg-slate-100 rounded-t-sm h-[30%]"></div>
                            <div className="w-full bg-slate-100 rounded-t-sm h-[50%]"></div>
                            <div className="w-full bg-accent-mint rounded-t-sm h-[95%]"></div>
                        </div>
                        <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-400 uppercase">
                            <span>Mon</span>
                            <span>Today</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-slate-100/40 rounded-2xl p-4 flex items-center justify-between border border-dashed border-slate-300">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                <span className="material-symbols-outlined text-primary">calendar_today</span>
                            </div>
                            <div>
                                <p className="text-slate-900 font-bold">Upcoming: Product Sprint Planning</p>
                                <p className="text-slate-500 text-sm">Tomorrow at 10:00 AM • 45 mins</p>
                            </div>
                        </div>
                        <button className="text-primary font-bold text-sm px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">Details</button>
                    </div>
                    <div className="bg-accent-mint/10 border border-accent-mint/20 rounded-2xl p-4 flex items-center gap-4">
                        <div className="size-10 rounded-full bg-accent-mint flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-xl">workspace_premium</span>
                        </div>
                        <div>
                            <p className="text-slate-900font-bold text-sm">3-Day Streak!</p>
                            <p className="text-slate-600 text-xs font-medium">Keep it going, hero.</p>
                        </div>
                    </div>
                </div>
            </main>


            {isMobile ? <Tabs /> : null}
        </div>
    )
}

export default Home