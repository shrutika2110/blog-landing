import { extractVideoId, timeFormatDuration } from '@/lib/helpers';
import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';

function CalculateVideoDuration({ videoUrl }: any) {

  const playerRef = useRef<any>(null);
  const [duration, setDuration] = useState(null);
  const extractedVideoId = videoUrl && extractVideoId(videoUrl);

    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
          controls: 0,
          rel: 0,
          loop: 1,
          start: 0,
          modestbranding: 1,
          fs: 0,
          iv_load_policy: 3,
          mute: 1,
          showinfo: 0,
      },
  };


  const onReady = (event: any) => {
      playerRef.current = event.target;
      playerRef.current.mute();
      const videoDuration = playerRef.current.getDuration();
      setDuration(videoDuration);
  };

  const handleError = (event: any) => {
      console.error('YouTube Player Error:', event.data);
  };

  return (
    <>
          <div className="hidden">
                {extractedVideoId && (
                    <YouTube
                        videoId={extractedVideoId}
                        opts={opts}
                        className="h-full w-full object-cover"
                        onReady={onReady}
                        onError={handleError}
                    />
                )}
            </div>
          <span>{duration !== null ? timeFormatDuration(duration) : '0 secs'}</span>
  </>
  );
}

export default CalculateVideoDuration;
