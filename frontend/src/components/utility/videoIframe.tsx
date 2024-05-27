import React from 'react';
import { YouTubeEmbed } from '@next/third-parties/google'

export default function VideoIframe() {
    return <YouTubeEmbed videoid="ZjAqacIC_3c" params="autoplay=1&controls=0&rel=0&loop=1&start=0" style="height:100%;object-fit:cover"  playlabel="Play" />;
};
