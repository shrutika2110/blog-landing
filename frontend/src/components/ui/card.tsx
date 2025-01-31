import * as React from "react"
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
            "bg-gray-250 rounded overflow-hidden",
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

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    variant?: "light" | "dark";
    size?: "base" | "lg" ;
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
    ({ className, variant = 'light', size = "base" , ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                " mb-3 line-clamp-2",
                {
                    "text-black": variant === "light",
                    "text-white": variant === "dark",
                    "text-sm xl:text-base font-bold leading-5 h-10 max-h-10": size === "base",
                    "font-extrabold md:text-2xl xl:text-4xl leading-9 h-19.5 max-h-19.5": size === "lg",
                },
                className
            )}
            {...props}
        />
    )
);
CardTitle.displayName = "CardTitle";

const CardDate = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm text-gray-350 line-clamp-1", className)}
        {...props}
    />
))
CardDate.displayName = "CardDate"

const CardTime = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
        <div className="flex items-center gap-1 text-gray-350 ">
            <MdOutlineAccessTime />
            <div
                ref={ref}
                className={cn("text-sm  text-gray-350 line-clamp-1", className)}
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

export { Card, CardBanner, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardDate, CardTime }