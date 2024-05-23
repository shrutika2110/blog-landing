'use client'
import * as React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { MdOutlineAccessTime } from "react-icons/md";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            " text-card-foreground bg-gray-250 rounded",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"
interface CardBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    roundedLeft?: boolean;
    border?: boolean;
    variant?: "light" | "dark";
    bgColor?: string;
    src?: string;
    title?: string;
}
const CardBanner = React.forwardRef<HTMLDivElement, CardBannerProps>(
    ({ className, src, title, bgColor = "#fff", roundedLeft = false }, ref) => {
      return (
        <div
          className={`${className} relative h-full w-full overflow-hidden ${roundedLeft ? "rounded-l" : "rounded-t"}`}
          ref={ref}
          style={{ backgroundColor: bgColor }}
        >
          {src ? (
            <Image
              src={src}
              alt={title ?? ""}
              fill={true}
              className="object-cover"
            />
          ) : null}
        </div>
      );
    }
  );
  
  CardBanner.displayName = "CardBanner";



interface CardVideoProps extends React.HTMLAttributes<HTMLDivElement> {
    roundedLeft?: boolean;
    border?: boolean;
    isLarge?:boolean;
    variant?: "light" | "dark";
    bgColor?: string;
    src?: string;
    title?: string;
}
const CardVideo = React.forwardRef<HTMLDivElement, CardVideoProps>(
    ({ className, src, isLarge, title, bgColor = "#fff", roundedLeft = false }, ref) => {
      const videoRef = useRef<HTMLVideoElement>(null);
      const [isPlaying, setIsPlaying] = useState(false);
  
      const togglePlayPause = () => {
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
      };
  
      return (
        <div ref={ref} style={{ backgroundColor: bgColor }} className={`relative h-full ${className}`}>
          {src ? (
            <div className="relative h-full">
              <video
                ref={videoRef}
                muted
                preload="auto"
                className={`relative object-cover h-full w-full overflow-hidden ${roundedLeft ? "rounded-l" : "rounded-t"}`}
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                className={`absolute bottom-4 right-4 z-30 cursor-pointer playVideo ${isLarge ? "h-20 w-20" : "h-8 w-8"}`}
                onClick={togglePlayPause}
              >
                <Image src="/images/play.svg" alt="Play" fill={true} />
              </div>
            </div>
          ) : null}
        </div>
      );
    }
  );
  
CardVideo.displayName = "CardVideo";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("text-base font-bold mb-3 text-black leading-5 ", className)}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDate = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm text-gray-350", className)}
        {...props}
    />
))
CardDate.displayName = "CardDate"

const CardTime = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
        <div className="flex items-center gap-1 text-gray-350">
            <MdOutlineAccessTime />
            <div
                ref={ref}
                className={cn("text-sm  text-gray-350", className)}
                {...props}
            />

        </div>
        
))
CardTime.displayName = "CardTime"



const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardBanner, CardVideo, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardDate, CardTime }