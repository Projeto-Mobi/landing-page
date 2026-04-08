
import { useTheme } from '@/context/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

function ToggleTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="cursor-pointer p-2 outline-none"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            aria-pressed={theme === "dark"}
        >
            { theme === "light" ? <Moon /> : <Sun /> }
        </button>
    )
}

export default ToggleTheme