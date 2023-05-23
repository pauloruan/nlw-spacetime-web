"use client"

import Image from "next/image"
import { ChangeEvent, useState } from "react"

export function MediaPicker() {
  const [preview, setPreview] = useState<null | string>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    if (!files) {
      return
    }
    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }

  return (
    <>
      <input
        type="file"
        id="media"
        title="media"
        className="invisible w-0 h-0"
        onChange={onFileSelected}
        accept="image/*"
        name="coverURL"
      />
      {preview && (
        <Image
          src={preview}
          alt="preview"
          className="w-full aspect-video rounded-lg object-cover"
          width={400}
          height={400}
        />
      )}
    </>
  )
}
