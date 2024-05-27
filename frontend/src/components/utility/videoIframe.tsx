import React from 'react';
import { YouTubeEmbed } from '@next/third-parties/google'

interface Props {
    videoId ?: any;
}

export default function VideoIframe({videoId}:Props) {
    return (
        <div className='h-full videoHolder'>
            <YouTubeEmbed videoid={videoId} params="autoplay=1&controls=0&rel=0&loop=1&start=0" style="height:100%;object-fit:cover"  playlabel="Play" />
        </div>
    );
};
