export type supportColorVariant =
  | "success1"
  | "success2"
  | "warning1"
  | "warning2"
  | "error1"
  | "error2"
export const supportColors: Record<supportColorVariant, string> = {
  success1: "#3CC13B",
  success2: "#E0F5E0",
  warning1: "#F3BB1C",
  warning2: "#FDF3D8",
  error1: "#F03738",
  error2: "#FDE3E3",
}
