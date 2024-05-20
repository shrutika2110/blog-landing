import { cn } from "@/lib/utils";

type TextProps = {
    children: React.ReactElement | string,
    size?:  "base" | "md",
    variant?: "dark" | "light",
    className?: string,
}

export default function Text({ children, size = "base", variant = "dark", className }: TextProps) {

    const textSize = {
        "base": "text-xs md:text-sm",
        "md": "text-sm md:text-base",
    }[size];

    const subTitleVariant = {
        "dark": "text-white",
        "light": "",
    }[variant];

    return (
        <div className={cn(`${textSize} ${subTitleVariant}`, className)}>
            {children}
        </div>
    )
}