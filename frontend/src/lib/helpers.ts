
export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_API_URL
      }${path}`;
}

export function getStrapiMedia(url: string | undefined) {
  return getStrapiURL(url);
}


export function dateFormate(ctx: any) {
  // const index = arr.findIndex((obj: any) => obj.id === id);
  const options: any = { day: '2-digit', month: 'short', year: 'numeric' };
  const formatDateVal = new Date(`${ctx}`).toLocaleDateString('en-GB', options);
  return formatDateVal;
}

export const paginate = (items:any, pageNumber:any, pageSize:any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
 };

 export function emitErrorNotification(
  msg = 'Something went wrong, Please try again!',
) {
  console.log(msg);
}