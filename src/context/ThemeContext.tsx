import { ETheme } from "@/types/themeTypes";
import { createContext, ReactNode, useContext, useState } from "react";

const ThemeContext = createContext<{
  theme: ETheme;
  toggleTheme: () => void;
} | null>(null);

export default ThemeContext;