const Tabs = () => {

    const tabs = [
        { id: 'Home', icon: '🏠', label: 'Home' },
        { id: 'Focus', icon: '🧘🏻‍♀️', label: 'Focus' },
        { id: 'Tools', icon: '⚙️', label: 'Tools' },
        { id: 'Vault', icon: '🛅', label: 'Vault' },
    ]


    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white border border-t-gray-300 border-b-white border-x-gray-300 rounded-tl-2xl rounded-tr-2xl py-8 z-1000">
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
        </div>
    )
}

export default Tabs