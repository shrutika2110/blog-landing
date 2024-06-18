
export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_API_URL
      }${path}`;
}


export function getMediaURL(path = '') {
  return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL
      }${path}`;
}

export function getStrapiMedia(url: string | undefined) {
  return getMediaURL(url);
}

export function dateFormate(ctx: any) {
  // const index = arr.findIndex((obj: any) => obj.id === id);
  const options: any = { day: '2-digit', month: 'short', year: 'numeric' };
  const formatDateVal = new Date(`${ctx}`).toLocaleDateString('en-GB', options);
  return formatDateVal;
}

export const paginate = (items:any, pageNumber:any, pageSize:any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items && items.slice(startIndex, startIndex + pageSize);
 };

 export function emitErrorNotification(
  msg = 'Something went wrong, Please try again!',
) {
  console.log(msg);
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-GB'); // Change locale as per your requirement

  return formattedDate;
}

export function extractVideoId(url: string): string | null {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function timeFormatDuration(seconds: any) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs} hrs ${mins > 0 ? mins + " mins" : ""} ${secs > 0 ? (secs < 10 ? '0' : '') + secs + " secs" : ""}`;
  } else if (mins > 0) {
    return `${mins} mins ${secs > 0 ? (secs < 10 ? '0' : '') + secs + " secs" : ""}`;
  } else if (secs > 0) {
    return `${secs < 10 ? '0' : ''}${secs} secs`;
  } else {
    return "0 secs";
  }
}