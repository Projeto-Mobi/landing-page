import ToggleDarkMode from "./ToggleDarkMode"
import { useState, useEffect } from "react"

function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled])

    return (
        <header className={`${isScrolled ? "bg-transparent" : ""} transition duration-300 sticky top-0 mb-4 flex items-center w-full h-12 p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] bg-furg-yellow justify-between`}>
            <h1 className="font-bold text">MobiFurg</h1>
            <nav className="hidden md:block text-xs">
                <ul className="flex gap-8 font-manrope font-bold">
                    <li className="cursor-pointer">
                        <a href="#start">INÍCIO</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="#about">SOBRE NÓS</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="#sec-3">CONTATO</a>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-5 text-xs">
                <button className="hidden md:block cursor-pointer">Área Restrita</button>
                <ToggleDarkMode />
            </div>
        </header>
    )    
}

export default Header