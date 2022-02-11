import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const toggleTheme = () => setIsLightTheme(!isLightTheme)
    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}