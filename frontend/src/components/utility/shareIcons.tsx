'use client'
import { useState } from "react";
import queryString from 'query-string';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FaCopy, FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

interface Props {
    blogDetails?: any;
}

    
export default function ShareIcons({blogDetails}: Props) {

    let currentUrl = "/";
    if (typeof window !== "undefined") {
        currentUrl = window && window?.location?.href;
    }

    const [isCopied, setIsCopied] = useState(false);

    const handleClick = async () => {
  
      try {
        const textToCopy = `${currentUrl}`;
  
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to copy: ', err);
      }
    };
  
    const shareOnTwitter = (title: any) => {
      const url = 'https://twitter.com/intent/tweet';
  
      const params = {
        text: title, // Add your desired tweet text
        url: `${currentUrl}`, // Add the URL you want to share
      };
      const shareUrl = `${url}?${queryString.stringify(params)}`;
  
      window.open(shareUrl, '_blank', 'width=600,height=300');
    };

    
  return (
        <>
           <div className="text-3xl h-7.5 w-7.5 flex items-center" title="Share on Facebook">
                        <FacebookShareButton
                            url={currentUrl}
                            title={blogDetails?.Title}
                        >
                            <FaFacebook />
                        </FacebookShareButton>
            </div>
            <div className="text-3xl h-7.5 w-7.5 flex items-center" title="Share on Whatsapp">
                        <WhatsappShareButton
                            url={currentUrl}
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

    




