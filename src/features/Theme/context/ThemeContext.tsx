import { ETheme } from "@/features/Theme/types/themeTypes";
import { createContext } from "react";

const ThemeContext = createContext<{
  theme: ETheme;
  toggleTheme: () => void;
} | null>(null);

export default ThemeContext;