"use client"
import React, { useState } from "react"
import { AddCircleIcon } from "../Icons"
import Typography from "../Typography"

const { Caption2Regular } = Typography

type FileUploadProps = {
  onFileSelect: (file: File) => void
  accept?: string // e.g. "image/*,audio/*"
  id: string
}

export const FileUploadInput: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept,
  id,
}) => {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onFileSelect(file)
    }
  }

  return (
    <>
      <label htmlFor={id}>
        <div
          className={`w-full h-[10rem] bg-grey-700 hover:border-primary-hover border-grey-300 border-[1px] p-4 mt-4 rounded-lg cursor-pointer flex items-center justify-center gap-2 flex-col border-dashed`}
        >
          <div className="scale-150">
            <AddCircleIcon />
          </div>
          <Caption2Regular>Choose file</Caption2Regular>
        </div>
      </label>
      {fileName && (
        <Caption2Regular className="text-primary-active">
          {fileName}
        </Caption2Regular>
      )}
      <input
        type="file"
        onChange={handleFileChange}
        accept={accept}
        style={{ display: "none" }}
        id={id}
      />
    </>
  )
}
