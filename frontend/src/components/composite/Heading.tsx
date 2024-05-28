import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
    level?: number,
    children?: React.ReactElement | any,
    variant?: "dark" | "light" | "primary",
    size?: "sm" | "base" | "xs" | "xxs" | "lg" | "xl",
    className?: string,
    title?: string;
    style?: any
}

const Heading = ({ level, children, variant = "light", size = "base", className, style }: HeadingProps) => {
    const DynamicTag: any = `h${level}`;

    const headingVariant = {
        "dark": "text-white",
        "light": "text-black-250",
        "primary": "text-primary",
    }[variant];

    return (
        <DynamicTag
            className={cn(` font-bold 
                ${level == 1
                    ? 'lg:text-5xl text-2xl'
                    : level == 2
                        ? size === 'sm' ? `lg:text-2xl text-lg ` : `lg:text-5xl text-2xl`
                        : level == 3
                            ? size === 'lg' ? 'text-lg lg:text-4xl ' : 'text-sm md:text-base xl:text-2xl'
                            : level == 4
                                ? size === 'sm' ? ' text-xl' : 'md:text-3xl text-2xl '
                                : level == 5
                                    ? size === 'sm' ? ' text-sm' :'text-base xl:text-md '
                                    : level == 6 && ''
                }
                ${headingVariant}
            `, className)}
            style={style}
        >
            {children}
        </DynamicTag>
    );
};

export default Heading;
