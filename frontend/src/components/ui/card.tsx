import * as React from "react"

import { cn } from "@/lib/utils"
import Image from "next/image"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-xl border bg-card text-card-foreground",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"
interface CardBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    roundedLeft?: boolean;
    border?: boolean;
    isVideo?: boolean;
    isLarge?:boolean;
    variant?: "light" | "dark";
    bgColor?: string;
    src?: string;
    title?: string;
}
const CardBanner = React.forwardRef<HTMLDivElement, CardBannerProps>(
    ({ className, src, isVideo, isLarge, title, bgColor = "#fff", roundedLeft = false }, ref) => (
        isVideo ? 
        <>
        {(src as any) ? (
            <div className="relative h-full">
                <video muted preload="auto" className={`${className} relative object-cover h-full w-full overflow-hidden ${roundedLeft ? "rounded-l" : "rounded-t" }`} >
                    <source src={src as any} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={` absolute bottom-4 right-4 z-30 cursor-pointer ${isLarge ? "h-20 w-20" : "h-8 w-8" }`}>
                    <Image src="/images/play.svg" alt="Play" fill={true}></Image>
                </div>
            </div>
        ) : null}
        </>
     : 
        <div
            className={`${className} relative h-full w-full overflow-hidden ${roundedLeft ? "rounded-l" : "rounded-t" }`}
            ref={ref}
            style={{ backgroundColor: bgColor }}
        >
            {(src as any) ? (
                <Image
                    src={src as any}
                    alt={title ?? ""}
                    fill={true}
                    className={`object-cover `}
                />
            ) : null}
        </div>
        
    )
);
CardBanner.displayName = "CardBanner";

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
    <div
        ref={ref}
        className={cn("text-sm  text-gray-350", className)}
        {...props}
    />
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

export { Card, CardBanner, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardDate, CardTime }