// Enum for supported media MIME types
export enum MediaFormat {
  JPEG = "image/jpeg",
  PNG = "image/png",
  APNG = "image/apng",
  AVIF = "image/avif",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",
  WAV = "audio/wav",
  MP3 = "audio/mpeg",
  FLAC = "audio/flac",
  AAC = "audio/aac",
  OGG = "audio/ogg",
  M4A = "audio/mp4",
  AIFF = "audio/x-aiff",
  WMA = "audio/x-ms-wma",
  OPUS = "audio/opus",
  MP4_VIDEO = "video/mp4",
  WEBM_VIDEO = "video/webm",
  QUICKTIME = "video/quicktime",
}

// Type representing allowed media MIME types
export type MediaFormatType = `${MediaFormat}`
