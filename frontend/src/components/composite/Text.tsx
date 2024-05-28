import { cn } from "@/lib/utils";

type TextProps = {
    children: React.ReactElement | string,
    size?:  "base" | "lg" ,
    variant?: "dark" | "light",
    className?: string,
}

export default function Text({ children, size = "base", variant = "dark", className }: TextProps) {

    const textSize = {
        "base": "text-sm lg:text-base",
        "lg": "text-base md:text-lg",
    }[size];

    const subTitleVariant = {
        "dark": "text-white",
        "light": "text-black",
    }[variant];

    return (
        <div className={cn(`${textSize} ${subTitleVariant}`, className)}>
            {children}
        </div>
    )
}