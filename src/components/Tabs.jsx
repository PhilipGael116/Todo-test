import { Home, Target, Settings, Shield } from 'lucide-react';

const Tabs = () => {
    const tabs = [
        { id: 'Home', icon: <Home size={22} />, label: 'Home', active: true },
        { id: 'Focus', icon: <Target size={22} />, label: 'Focus', active: false },
        { id: 'Tools', icon: <Settings size={22} />, label: 'Tools', active: false },
        { id: 'Vault', icon: <Shield size={22} />, label: 'Vault', active: false },
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white border-slate-700 py-3 pb-6 z-50 rounded-tl-2xl rounded-tr-2xl">
            {tabs.map((tab) => (
                <a
                    key={tab.id}
                    href="#"
                    className={`flex flex-col items-center gap-1 transition-colors ${tab.active ? 'text-[#2b8cee]' : 'text-slate-400 hover:text-slate-600'}`}
                >
                    {tab.icon}
                    <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
                </a>
            ))}
        </div>
    )
}

export default Tabs;