export interface variantColors {
  default: string
  hover: string
  active: string
}

export type variant = "primary" | "accent"
export const colorVariants: Record<variant, variantColors> = {
  primary: {
    default: "#EA3A60",
    hover: "#C33050",
    active: "#ED5B7A",
  },
  accent: {
    default: "#8B11A9",
    hover: "#A715CB",
    active: "#B63CD4",
  },
}
