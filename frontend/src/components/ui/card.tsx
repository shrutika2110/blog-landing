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
            "rounded-xl border bg-card text-card-foreground shadow",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"
interface CardBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    roundedFull?: boolean;
    border?: boolean;
    variant?: "light" | "dark";
    bgColor?: string;
    src?: string;
    title?: string;
}
const CardBanner = React.forwardRef<HTMLDivElement, CardBannerProps>(
    ({ className, src, title, bgColor = "#fff", roundedFull = false }, ref) => (
        <div
            className={`${className} relative rounded  ${roundedFull
                ? "p-0"
                : "md:-mt-8 -mt-6  md:-mx-8 -mx-6 md:mb-8  mb-4 pt-6"
                }`}
            ref={ref}
            style={{ backgroundColor: bgColor }}
        >
            {(src as any) ? (
                <Image
                    src={src as any}
                    alt={title ?? ""}
                    fill={true}
                    className={`object-cover ${roundedFull ? "rounded-lg" : "rounded-tl-lg rounded-tr-lg"
                        }`}
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
        className={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

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

export { Card, CardBanner, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }