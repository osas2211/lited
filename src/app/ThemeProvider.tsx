"use client"
import React, { FC } from "react"
import { CssVarsProvider } from "@mui/joy"
import { extendTheme } from "@mui/joy/styles"

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: "#fdebef",
          100: "#fbd8df",
          200: "#f9c4cf",
          300: "#f7b0bf",
          400: "#f59db0",
          500: "#ea3a60",
          600: "#d33456",
          700: "#bb2e4d",
          800: "#a42943",
          900: "#8c233a",
        },
      },
    },
  },
})

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      {children}
    </CssVarsProvider>
  )
}
