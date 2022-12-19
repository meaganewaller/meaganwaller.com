import { buildUrl, setConfig } from "cloudinary-build-url"

setConfig({ cloudName: 'meaganwaller-com' })

export const postImageUrl = (publicId: string, blur: 'noBlur' | 'blur' = 'noBlur') => {
  const width = 1200
  const height = 630

  const blurOptions =
    blur === 'blur'
      ? {
          effect: 'blur:500',
          quality: 1,
        }
      : {}

  return buildUrl(publicId, {
    transformations: {
      ...blurOptions,
      resize: {
        type: 'fill',
        width,
        height,
      },
    },
  })
}

export const thumbnailUrl = (publicId: string, blur: 'noBlur' | 'blur' = 'noBlur') => {
  const width = blur === 'noBlur' ? 390 : 150
  const height = blur === 'noBlur' ? 218 : 100

  const blurOptions =
    blur === 'blur'
      ? {
          effect: 'blur:500',
          quality: 1,
        }
      : {}

    let url = buildUrl(publicId, {
      transformations: {
        ...blurOptions,
        resize: {
          type: 'fill',
        width,
        height,
      },
    },
  })

  return url
}

export default buildUrl
