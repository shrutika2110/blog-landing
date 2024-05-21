
export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_API_URL
      }${path}`;
}

export function getStrapiMedia(url: string | undefined) {
  return getStrapiURL(url);
}


