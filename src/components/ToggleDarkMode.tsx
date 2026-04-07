import useDarkMode from "@/hooks/useDarkMode";
import { Moon, Sun } from 'lucide-react';

function ToggleDarkMode() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button className="cursor-pointer p-2 outline-none" onClick={toggleDarkMode}>
            {/* { isDarkMode ? "Dark mode" : <Sun /> + "Light mode"} */}
            { isDarkMode ? <Moon /> : <Sun /> }
        </button>
    )
}

export default ToggleDarkMode