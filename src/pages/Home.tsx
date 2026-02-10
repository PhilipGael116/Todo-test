import { Header, Tabs } from "../components";
import { useEffect, useState } from "react";
import { Plus, Rocket, MoreHorizontal, Check, Mic, Calendar, Award } from 'lucide-react';


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
        <div className="pb-24 md:pb-8 xl:h-screen xl:overflow-hidden xl:flex xl:flex-col">
            <Header />

            <main className="max-w-7xl mx-auto w-full px-6 xl:px-30 py-4 xl:flex-1 xl:flex xl:flex-col xl:min-h-0">
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
                    <div>
                        <p className="text-[#2b8cee] font-bold tracking-widest text-xs uppercase mb-1">Thursday, Oct 24</p>
                        <h1 className="text-slate-900 text-4xl font-black tracking-tight">Ready to focus, Alex?</h1>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-[#2b8cee] hover:bg-[#2b8cee]/90 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-[#2b8cee]/20 transition-all">
                            <Plus size={20} />
                            New Task
                        </button>
                    </div>
                </div>

                <div className="xl:flex-1 xl:min-h-0">
                    <div className="grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-6 lg:grid-cols-4 lg:gap-5 lg:grid-rows-2 md:grid-cols-1 md:gap-5 gap-4 xl:h-full">

                        <div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl p-8 text-white relative overflow-hidden group shadow-2xl shadow-[#2b8cee]/30 bg-[#2b8cee]">
                            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <Rocket size={240} />
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
                                        <div className="size-10 rounded-full border-2 border-[#2b8cee] bg-slate-200 overflow-hidden" data-alt="Teammate avatar"></div>
                                        <div className="size-10 rounded-full border-2 border-[#2b8cee] bg-slate-300 overflow-hidden" data-alt="Teammate avatar"></div>
                                        <div className="size-10 rounded-full border-2 border-[#2b8cee] bg-slate-400 flex items-center justify-center text-xs font-bold">+2</div>
                                    </div>
                                    <button className="bg-white text-[#2b8cee] hover:bg-slate-100 px-6 py-3 rounded-xl font-extrabold transition-all">
                                        Complete Task
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">Momentum</h3>
                            <div className="relative size-24 flex items-center justify-center mb-1">
                                <svg className="size-24 -rotate-90">
                                    <circle className="text-slate-100" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" stroke-width="8"></circle>
                                    <circle className="text-green-500/80" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" stroke-dasharray="264" stroke-dashoffset="91" stroke-width="8"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-black text-slate-900 leading-none">75%</span>
                                    <span className="text-[10px] text-slate-500 font-bold uppercase">Done</span>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm">9 of 12 tasks completed</p>
                        </div>

                        <div className="col-span-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                            <div className="flex items-center justify-between mb-6 shrink-0">
                                <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest">Next Up</h3>
                                <MoreHorizontal className="text-slate-400 cursor-pointer" />
                            </div>
                            <div className="space-y-4 xl:flex-1 xl:overflow-y-auto pr-2">
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="size-5 rounded border-2 border-slate-200 group-hover:border-[#2b8cee] transition-colors flex items-center justify-center">
                                        <Check size={14} className="text-[#2b8cee] opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold truncate">Refine typography scale</span>
                                </div>
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="size-5 rounded border-2 border-slate-200 group-hover:border-[#2b8cee] transition-colors flex items-center justify-center">
                                        <Check size={14} className="opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold truncate">Client feedback sync</span>
                                </div>
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="size-5 rounded border-2 border-[#2b8cee] bg-[#2b8cee] flex items-center justify-center">
                                        <Check size={14} className="text-white" />
                                    </div>
                                    <span className="text-slate-400 text-sm font-medium line-through truncate">Icon set export</span>
                                </div>
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="size-5 rounded border-2 border-slate-200 group-hover:border-[#2b8cee] transition-colors flex items-center justify-center">
                                        <Check size={14} className="text-[#2b8cee] opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold truncate">Email Newsletter draft</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg bg-purple-500">
                            <div>
                                <h3 className="text-white/70  font-bold uppercase tracking-widest mb-2 text-sm">Quick Capture</h3>
                                <p className="text-sm font-bold leading-snug">Got an idea? Save it instantly with voice.</p>
                            </div>
                            <div className="flex justify-center py-4">
                                <button className="xl:size-12 size-16 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all">
                                    <Mic size={32} />
                                </button>
                            </div>
                            <div className="text-center">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Tap to record</span>
                            </div>
                        </div>

                        <div className="col-span-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col h-full overflow-hidden">
                            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4 shrink-0">Activity</h3>
                            <div className="flex items-end justify-between flex-1 xl:min-h-0 gap-1">
                                <div className="w-full bg-slate-100 rounded-t-sm h-[40%]"></div>
                                <div className="w-full bg-slate-100 rounded-t-sm h-[60%]"></div>
                                <div className="w-full bg-blue-300 rounded-t-sm h-[90%]"></div>
                                <div className="w-full bg-blue-500 rounded-t-sm h-[75%]"></div>
                                <div className="w-full bg-slate-100 rounded-t-sm h-[30%]"></div>
                                <div className="w-full bg-slate-100 rounded-t-sm h-[50%]"></div>
                                <div className="w-full bg-green-500/90 rounded-t-sm h-[95%]"></div>
                            </div>
                            <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-400 uppercase shrink-0">
                                <span>Mon</span>
                                <span>Today</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
                    <div className="md:col-span-2 bg-slate-100/40 rounded-2xl p-4 flex items-center justify-between border border-dashed border-slate-300">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                <Calendar className="text-[#2b8cee]" />
                            </div>
                            <div>
                                <p className="text-slate-900 font-bold">Upcoming: Product Sprint Planning</p>
                                <p className="text-slate-500 text-sm">Tomorrow at 10:00 AM • 45 mins</p>
                            </div>
                        </div>
                        <button className="text-[#2b8cee] font-bold text-sm px-4 py-2 hover:bg-[#2b8cee]/5 rounded-lg transition-colors">Details</button>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex items-center gap-4">
                        <div className="size-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <Award size={20} />
                        </div>
                        <div>
                            <p className="text-slate-900 font-bold text-sm">3-Day Streak!</p>
                            <p className="text-slate-600 text-xs font-medium">Keep it going, hero.</p>
                        </div>
                    </div>
                </div>
            </main>

            {isMobile ? <Tabs /> : null}
        </div>
    )
}

export default Home;