export function truncateString(
  address: string,
  startLength: number = 6,
  endLength: number = 4
): string {
  // Validate input
  if (!address || typeof address !== "string") {
    return address
  }

  // Return original if it's too short to truncate
  if (address.length <= startLength + endLength) {
    return address
  }

  // Handle cases where the address might include '0x' prefix
  const prefix = address.startsWith("0x") ? "0x" : ""
  const cleanAddress = prefix ? address.slice(2) : address

  // Truncate and combine
  return `${prefix}${cleanAddress.slice(0, startLength)}...${cleanAddress.slice(
    -endLength
  )}`
}
