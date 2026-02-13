import React, { useEffect } from 'react'
import { Sun, Moon } from "lucide-react"
import { cn } from '../lib/utlis'
const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    useEffect(() => {
        const storedThemed = localStorage.getItem("theme")
        if (storedThemed === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [])
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
        else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden")}>
            {isDarkMode ? <Sun size={20} className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-900' size={20} />}
        </button>
    )
}

export default ThemeToggle
