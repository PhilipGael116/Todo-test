const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-4 bg-white dark:bg-background-dark/50 sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-[#2b8cee]">
                        <div className="size-8 bg-[#2b8cee] rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">grid_view</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-xl font-extrabold leading-tight tracking-tight">BentoHub</h2>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-[#2b8cee] text-sm font-semibold leading-normal" href="#">Dashboard</a>
                        <a className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-[#2b8cee] transition-colors" href="#">Focus</a>
                        <a className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-[#2b8cee] transition-colors" href="#">Vault</a>
                        <a className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-[#2b8cee] transition-colors" href="#">Insights</a>
                    </nav>
                </div>

                <div className="flex flex-1 justify-end gap-4 items-center">
                    <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-200 dark:border-slate-700">
                        <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm w-40 placeholder:text-slate-400" placeholder="Jump to task..." type="text" />
                    </div>
                    <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="size-9 rounded-full bg-[#2b8cee]/20 border-2 border-[#2b8cee] overflow-hidden">
                        <img alt="Profile" className="w-full h-full object-cover" data-alt="User profile avatar minimalist design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN6lwFjKt2XoOwjakywJNsY2wHC_2sYqqG3TKE4bWxBdhkC2sH0XgdtvLyjvqSNBqhpcKCNwzFreZuswV3223JVO4PIQMxPAXMl4W6ONrfwAzGvTgacbd75AK0mF1lVwwcUj5keILBnMnJkv-_or-HS4ORKVLdInR5-uOIdTepvKO_hG1_CWzN3YkkWAI7ZVcX5Ryzeo5RBHKtYaVI8Va1ishHZcXMGJgX7ToTuhYTUNKy3dNfxZ8i_cIfPm1IpIs4zTEgXj5Gcg" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header