import { createContext, ReactNode, useContext, useState } from "react";

enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}

const ThemeContext = createContext<{
  theme: ETheme;
  toggleTheme: () => void;
} | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  let initTheme: ETheme = ETheme.LIGHT;

  initTheme = localStorage.getItem('theme') as ETheme ?? ETheme.LIGHT; 

  const [theme, setTheme] = useState<ETheme>(initTheme);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
};
