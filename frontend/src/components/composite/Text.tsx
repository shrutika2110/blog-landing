import { cn } from "@/lib/utils";

type TextProps = {
    children: React.ReactElement | any,
    size?:  "base" | "md" |  "lg" ,
    variant?: "dark" | "light",
    className?: string,
}

export default function Text({ children, size = "base", variant = "dark", className }: TextProps) {

    const textSize = {
        "base": "text-sm lg:text-base",
        "md": "text-md lg:text-lg",
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