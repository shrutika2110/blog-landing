import * as React from "react"
import Link from "next/link"


import { cn } from "@/lib/utils"

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
    hoverbg?: boolean; // hoverbg prop with default value false
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
    ({ className, hoverbg = false, ...props }, ref) => (
        <li
            ref={ref}
            className={cn(
                'group list-none cursor-default',
                { 'bg-black-200': hoverbg }, // Conditional class based on hoverbg prop
                className
            )}
            {...props}
        />
    )
);

ListItem.displayName = 'ListItem';


interface ListLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    src: string;
}
const ListLink: React.FC<ListLinkProps> = (({ className, src, ...props }) => (

    <Link href={src} >
        <span
            className={cn(" transition-all duration-100 hover:text-white ", className)}
            {...props}
        ></span>
    </Link>
));
ListLink.displayName = "ListLink";


export { ListItem, ListLink }
