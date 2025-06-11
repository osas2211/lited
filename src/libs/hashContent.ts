import { createHash } from "crypto"
import { toHex, Hex } from "viem"
import axios from "axios"

// get hash from a file
export async function getFileHash(file: File): Promise<Hex> {
  const arrayBuffer = await file.arrayBuffer()
  const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer)
  return toHex(new Uint8Array(hashBuffer), { size: 32 })
}

// get hash from a url
export async function getHashFromUrl(url: string): Promise<Hex> {
  const response = await axios.get(url, { responseType: "arraybuffer" })
  const buffer = Buffer.from(response.data)
  return ("0x" + createHash("sha256").update(buffer).digest("hex")) as Hex
}
