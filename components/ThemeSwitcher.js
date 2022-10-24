import { useState } from "react"
import DarkTheme from "./DarkTheme";

function loadDarkMode(){
    if(typeof localStorage === "undefined")
        return false

    const value = localStorage.getItem("dark-mode");
    return (value === null)? false : JSON.parse(value);
}

export function ThemeSwitcher(){
    const DARK_MODE_KEY = "dark-mode"

    const [isDarkMode,setIsDarkMode] = useState(loadDarkMode);
    
    const handleSwithTheme = () => {
      localStorage.setItem(DARK_MODE_KEY, JSON.stringify(!isDarkMode)) 
      setIsDarkMode(prev => !prev)
    }

    return(
    <>
        <button onClick={handleSwithTheme}>
            Toggle Theme
        </button>
        {isDarkMode && ( <DarkTheme />)}
    </>
    )
}

