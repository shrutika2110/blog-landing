import { getStrapiURL } from '@/lib/helpers';

interface OptinType {
  folds: string;
}
async function fetchAPI(path: any, urlParamsObject: any, param?: OptinType) {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  //   const queryString = qs.stringify(urlParamsObject);
  const queryString = urlParamsObject;
  // console.log(queryString, "queryString");

  // const requestUrl = `${getStrapiURL(
  //   `/api/${path}${queryString ? `=${queryString}` : ''}&&populate=${
  //     options.author
  //   }.image&populate=coverImg.image&populate=${options.categories}&populate=${
  //     options.tags
  //   }`,
  // )}`;

  const requestUrl = `${getStrapiURL(
    `/api/${path}${queryString ? `=${queryString}` : ''}&${
      param ? param.folds : 'populate=*'
    }`,
  )}`;

  try {
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log(error, "rror in API.TSX");
    throw new Error('404');
  }
}

export default fetchAPI;
