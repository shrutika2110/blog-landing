import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
    level?: number,
    children?: React.ReactElement | any,
    variant?: "dark" | "light",
    size?: "sm" | "xs" | "xxs" | "xl",
    className?: string,
    title?: string;
    style?: any
}

const Heading = ({ level, children, variant = "dark", size, className, style }: HeadingProps) => {
    const DynamicTag: any = `h${level}`;

    const headingVariant = {
        "dark": "text-black",
        "light": "text-white",
    }[variant];

    return (
        <DynamicTag
            className={cn(`
                ${level == 1
                    ? 'lg:text-5xl text-2xl'
                    : level == 2
                        ? size === 'sm' ? `lg:text-2xl text-lg `: size === 'xl' ? `lg:text-xl text-lg ` : size === 'xs' ? `lg:text-lg text-md ` : `lg:text-5xl text-2xl`
                        : level == 3
                            ? size === 'sm' ? 'text-2xl ' : 'md:text-2xl text-lg'
                            : level == 4
                                ? size === 'sm' ? ' text-2xl' : size === 'xs' ? ' text-md' : 'md:text-3xl text-2xl '
                                : level == 5
                                    ? size === 'sm' ? ' text-sm' :'text-sm lg:text-base xl:text-md '
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
