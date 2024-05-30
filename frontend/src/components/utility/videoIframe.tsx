"use client"
import React, { useState, useRef } from 'react';
import Image from "next/image";
import { LiaPauseSolid, LiaPlaySolid } from 'react-icons/lia';
import { extractVideoId } from '@/lib/helpers';
import YoutubePlayer from './youtubePlayer';

interface Props {
    videoId?: string;
    size?: string;
    inlinePlay?: boolean;
    coverImg?: any;
}

export default function VideoIframe({ videoId, coverImg, size, inlinePlay }: Props) {

    const [isPlaying, setIsPlaying] = useState(inlinePlay || false);
    const playerRef = useRef<any>(null);
    const extractedVideoId = videoId && extractVideoId(videoId);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: inlinePlay ? 1 : 0,
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
        if (inlinePlay) {
            playerRef.current.playVideo();
        }
    };

    const handlePlayPause = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pauseVideo();
                setIsPlaying(false); // Update state after pausing
            } else {
                playerRef.current.playVideo();
                setIsPlaying(true); // Update state after playing
            }
        }
    };

    const handleError = (event: any) => {
        console.error('YouTube Player Error:', event.data);
    };

    return (
        <div className="relative h-full">
            <div className="videoHolder h-full">
                {extractedVideoId && (
                    <YoutubePlayer
                        videoId={extractedVideoId}
                        opts={opts}
                        onReady={onReady}
                        onError={handleError}
                    />
                )}
            </div>
            {!isPlaying && (
                <div
                    className="absolute inset-0 z-20 cursor-pointer"
                    onClick={handlePlayPause}
                >
                    <Image src={coverImg || '/images/poster.jpeg'} fill={true} alt="Video" className='object-cover' />
                </div>
            )}
            <div
                className={`absolute bottom-4 right-4 z-30 cursor-pointer flex items-center justify-center border-white bg-offwhite-450 rounded-full text-white ${size === "lg" ? "h-20 w-20 border-3 text-5xl" : size === "md" ? "h-12 w-12 border-2 text-2xl" : "h-8 w-8 border text-md"}`}
                onClick={handlePlayPause}
            >
                {isPlaying ? <LiaPauseSolid /> : <LiaPlaySolid />}
            </div>
        </div>
    );
}