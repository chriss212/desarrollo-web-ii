export default function TeamLayout( { children }){
    return(
        <div className="flex h-screen">
            <nav className="w-1/4 bg-gray-900 text-white p-8">
                <ul className="space-y-4">
                    <li><a href="#" className="block p-2">Fulanito</a></li>
                    <li><a href="#" className="block p-2">Fulanito</a></li>
                    <li><a href="#" className="block p-2">Fulanito</a></li>
                    <li><a href="#" className="block p-2">Fulanito</a></li>
                </ul>
            </nav>
            <main className="flex-1 p-10">
                {children}
            </main>
        </div>
    )
}