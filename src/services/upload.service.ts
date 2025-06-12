import { pinata } from "@/utils/pinata_config"
import axios from "axios"

export const uploadFileToIPFS = async ({ file }: { file: File }) => {
  const urlRequest = await axios.get("/api/pinata")
  const signedURL = urlRequest.data.url
  const upload = await pinata.upload.public.file(file).url(signedURL) // Upload the file with the signed URL
  return upload
}

// export const uploadJSONToIpfs = async ({ file }: { file: File }) => {
//   const urlRequest = await axios.get(
//     "https://api.pinata.cloud/pinning/pinJSONToIPFS"
//   )
//   const signedURL = urlRequest.data.url
//   const upload = await pinata.upload.public.json(file).url(signedURL) // Upload the file with the signed URL
//   return upload
// }
