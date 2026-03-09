import { Home, Target, Settings, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Tabs = () => {
    const location = useLocation();

    const tabs = [
        { id: 'Home', icon: <Home size={22} />, label: 'Home', path: '/home' },
        { id: 'Focus', icon: <Target size={22} />, label: 'Focus', path: '/focus' },
        { id: 'Tools', icon: <Settings size={22} />, label: 'Tools', path: '#' },
        { id: 'Vault', icon: <Shield size={22} />, label: 'Vault', path: '#' },
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white border-t border-slate-100 py-3 pb-6 z-50 rounded-tl-3xl rounded-tr-3xl shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.15)]">
            {tabs.map((tab) => {
                const isActive = location.pathname === tab.path;
                return (
                    <Link
                        key={tab.id}
                        to={tab.path}
                        className={`flex flex-col items-center gap-1.5 transition-all duration-300 relative ${isActive ? 'text-[#2b8cee] scale-105' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        {tab.icon}
                        <span className="text-[10px] font-black uppercase tracking-[0.1em]">{tab.label}</span>
                        {isActive && <div className="absolute -bottom-1 size-1 bg-[#2b8cee] rounded-full"></div>}
                    </Link>
                );
            })}
        </div>
    )
}

export default Tabs;