import useDarkMode from "@/hooks/useDarkMode";

function ToggleDarkMode() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button className="cursor-pointer p-2" onClick={toggleDarkMode}>
            { isDarkMode ? "Dark mode" : "Light mode"}
        </button>
    )
}

export default ToggleDarkMode