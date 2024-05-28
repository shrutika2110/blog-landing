import React, { useEffect, useState } from 'react';

function CalculateVideoDuration({ videoUrl }: any) {
  const [videoTimeDisplay, setVideoTimeDisplay] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoDuration = () => {
      const tempVideo = document.createElement('video');
      tempVideo.src = videoUrl;

      tempVideo.onloadedmetadata = () => {
        const duration = Math.floor(tempVideo.duration);
        if (!isNaN(duration)) {
          if (duration < 60) {
            setVideoTimeDisplay(`${duration} secs`);
          } else {
            const minutes = Math.floor(duration / 60);
            const seconds = duration % 60;
            setVideoTimeDisplay(`${minutes}.${seconds} mins`);
          }
        } else {
          setVideoTimeDisplay(null);
        }
        tempVideo.remove();
      };
    };

    fetchVideoDuration();
  }, [videoUrl]);

  return <span>{videoTimeDisplay !== null ? videoTimeDisplay : '0 secs'}</span>;
}

export default CalculateVideoDuration;
