import React from 'react';
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from "next/image"

interface Props {
    videoId ?: any;
    isLarge ?: any;
}

export default function VideoIframe({videoId, isLarge}:Props) {

    return (
        <div className='relative h-full' >
            <div className='videoHolder h-full'>
                <YouTubeEmbed videoid={videoId} params="autoplay=1&controls=0&rel=0&loop=1&start=0" style="height:100%;object-fit:cover"  playlabel="Play" />
            </div>
            <div
                className={`absolute bottom-4 right-4 z-30 cursor-pointer playVideo ${isLarge ? "h-20 w-20" : "h-8 w-8"}`}
            >
            <Image src="/images/play.svg" alt="Play" fill={true} />
            </div>
        </div>
    );
};
