import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}