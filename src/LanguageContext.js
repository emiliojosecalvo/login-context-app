import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setLanguage] = useState('spanish');

    const chooseLanguage = (event) => setLanguage(event.target.value)

    return (
        <LanguageContext.Provider value={{ language, chooseLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );

}