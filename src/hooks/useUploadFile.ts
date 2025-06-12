import { uploadFileToIPFS } from "@/services/upload.service"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

export const useUploadFile = () => {
  return useMutation({
    mutationFn: (data: { file: File }) => {
      return uploadFileToIPFS(data)
    },
    onSuccess: (data) => {},
    onError: () => {
      toast.error("Failed to upload file")
    },
  })
}
