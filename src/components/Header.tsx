import ToggleDarkMode from "./ToggleDarkMode";
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

function Header() {

    const links = [
        { name: 'inicio', href: '#beginning' },
        { name: 'sobre nós', href: '#about' },
        { name: 'contato', href: '#contact' },
    ];


    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

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
    }, []);

    return (
        <header className={`${isScrolled ? "bg-transparent" : ""} transition duration-300 sticky top-0 mb-4 flex items-center w-full h-12 p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] bg-furg-yellow justify-between`}>
            <h1 className="font-bold text">MobiFurg</h1>
            {/* Desktop Menu */}
            <nav className="hidden md:block text-xs">
                <ul className="flex gap-8 font-manrope font-bold">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="uppercase dark:text-white transition duration-300">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Mobile Menu */}
            {openMenu && (
                <nav className="flex flex-col md:hidden bg-furg-yellow fixed inset-0 overflow-hidden">
                    <button className="cursor-pointer flex justify-end p-4" onClick={() => setOpenMenu(false)}>
                        <X />
                    </button>
                    <ul className="flex flex-col gap-4 font-manrope font-bold items-center">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="uppercase dark:text-white" onClick={() => setOpenMenu(false)}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            <div className="flex gap-5 text-xs">
                <button className="hidden md:block cursor-pointer">Área Restrita</button>
                <ToggleDarkMode />
                <button className="cursor-pointer block md:hidden" onClick={() => setOpenMenu(true)}>
                    <Menu />
                </button>
            </div>
        </header>
    )    
}

export default Header