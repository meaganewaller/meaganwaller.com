import { meta, social } from "@data/meta"

const title = meta.title
const description = meta.description

const SEO = {
  title,
  titleTemplate: `%s - ${title}`,
  description,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: meta.url,
    title,
    description,
    images: [
      {
        url: config.baseUrl + "/og.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@" + social.twitterUsername,
    site: "@" + social.twitterUsername,
    cardType: "summary_large_image",
  },
}

export default SEO
