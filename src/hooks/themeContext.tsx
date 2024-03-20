import { createContext, useState, useMemo, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>("dark");

    function toggleTheme(): void {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
