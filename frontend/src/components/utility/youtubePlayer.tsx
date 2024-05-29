import React from 'react';
import YouTube from 'react-youtube';

interface Props {
    opts : any;
    videoId : any;
    onReady : any;
    onError ?: any;
}

export default function YoutubePlayer({ videoId, opts, onReady, onError  }: Props) {

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
            className="h-full w-full object-cover"
            onReady={onReady}
            onError={onError}
        />
    );
}
