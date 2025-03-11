"use client";

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import { ReactNode } from "react";

interface CustomThemeProviderProps extends Partial<ThemeProviderProps> {
  children: ReactNode;
}

export function ThemeProvider({
  children,
  attribute = "class", // Ensure this is a valid Attribute
  defaultTheme = "dark",
  enableSystem = false,
  disableTransitionOnChange = true,
}: CustomThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute as "class" | "data-theme" | ["class", "data-theme"]}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
}
