import { ReactNode, useState } from "react";
import ThemeContext from "@/features/Theme/context/ThemeContext";
import { ETheme } from "@/features/Theme/types/themeTypes";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
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

export default ThemeProvider;