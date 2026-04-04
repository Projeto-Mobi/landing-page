function Header() {
    return (
        <header className="flex items-center w-full h-12 p-3 bg-white justify-between">
            <h1>MobiFurg</h1>
            <nav className="hidden md:block">
                <ul className="flex gap-12">
                    <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500">
                        <a href="#sec-1">Section 1</a>
                    </li>
                    <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500">
                        <a href="#sec-2">Section 2</a>
                    </li>
                    <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500">
                        <a href="#sec-3">Section 3</a>
                    </li>
                </ul>
            </nav>
            <button className="hidden md:block">Área Restrita</button>
        </header>
    )    
}

export default Header