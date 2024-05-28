import React, { useEffect, useState } from 'react';

function CalculateVideoDuration({ videoUrl }: any) {
  const [videoTime, setVideoTime] = useState<number | null>(null);
  const [videoTimeDisplay, setVideoTimeDisplay] = useState<string | null>(null);

  const fetchVideoDuration = () => {
    const tempVideo = document.createElement('video');
    tempVideo.src = videoUrl;

    const duration = Math.floor(tempVideo.duration);
    // console.log('temp', duration );

    // tempVideo.onloadedmetadata = () => {
    //   const duration = Math.floor(tempVideo.duration);
      
    //   setVideoTime(isNaN(duration) ? null : duration);

    //   if (!isNaN(duration)) {
    //     if (duration < 60) {
    //       setVideoTimeDisplay(`${duration} secs`);
    //     } else {
    //       const minutes = Math.floor(duration / 60);
    //       const seconds = duration % 60;
    //       setVideoTimeDisplay(`${minutes}.${seconds} mins`);
    //     }

    //   } else {
    //     setVideoTimeDisplay(null);
    //   }

    //   tempVideo.remove();
    // };
  };

  useEffect(() => {
    fetchVideoDuration();
  }, [videoUrl]);

  return <span>{videoTimeDisplay !== null ? videoTimeDisplay : '0 secs'}</span>;
}

export default CalculateVideoDuration;
