'use client'
import { useState, useEffect, useRef } from "react";
import queryString from 'query-string';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FaCopy, FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

interface Props {
    blogDetails?: any;
}


export default function ShareIcons({blogDetails}: Props) {
    const [isCopied, setIsCopied] = useState(false);
    const currentUrlRef = useRef("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            currentUrlRef.current = window.location.href;
        }
    }, []);

    const handleClick = async () => {
        try {
            const textToCopy = currentUrlRef.current;
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const shareOnTwitter = (title: any) => {
        const url = 'https://twitter.com/intent/tweet';
        const params = {
            text: title,
            url: currentUrlRef.current,
        };
        const shareUrl = `${url}?${queryString.stringify(params)}`;
        window.open(shareUrl, '_blank', 'width=600,height=300');
    };

    return (
        <>
            <div className="text-3xl h-7.5 w-7.5 flex items-center" title="Share on Facebook">
                <FacebookShareButton
                    url={currentUrlRef.current}
                    title={blogDetails?.Title}
                >
                    <FaFacebook />
                </FacebookShareButton>
            </div>
            <div className="text-3xl h-7.5 w-7.5 flex items-center" title="Share on Whatsapp">
                <WhatsappShareButton
                    url={currentUrlRef.current}
                    title={blogDetails?.Title}
                >
                    <FaWhatsapp />
                </WhatsappShareButton>
            </div>
            <div className="text-3xl cursor-pointer h-7.5 w-7.5 flex items-center"
                title="Share on Twitter"
                onClick={() => shareOnTwitter(blogDetails?.Title)}
            >
                <FaXTwitter  />
            </div>
            <div className={`text-3xl h-7.5 w-7.5 flex items-center cursor-pointer ${
                isCopied ? 'text-skyBlue-400' : 'text-primary'
            }`}
                onClick={handleClick}
                title={`${isCopied ? 'Copied link' : 'Copy link'}`}
            >
                <div onClick={handleClick}>
                    <FaCopy />
                </div>
            </div>
        </>
    );
};
