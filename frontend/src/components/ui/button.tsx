import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex gap-2 items-center justify-center transition-all duration-200 font-bold whitespace-nowrap tracking-widest	 rounded-md letext-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-50 hover:bg-primary-700 border border-primary active:bg-primary-900 text-white",
        destructive:
          "bg-red-500 text-primary-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-primary-50 dark:hover:bg-red-900/90",
        outline:
          "border border-primary-200 bg-white hover:bg-primary-100 hover:text-white dark:border-primary-800 dark:bg-primary-950 dark:hover:bg-primary-800 dark:hover:text-primary-50",
        secondary:
          "bg-primary-100 text-white hover:bg-primary-100/80 dark:bg-primary-800 dark:text-primary-50 dark:hover:bg-primary-800/80",
        secondaryOutline: " border border-white bg-none text-white hover:bg-secondary-100 text-gray-50 font-bold",
        ghost: "hover:bg-primary-100 hover:text-white dark:hover:bg-primary-800 dark:hover:text-primary-50",
        link: "text-white underline-offset-4 hover:underline dark:text-primary-50",
      },
      size: {
        default: "py-2 px-3 lg:py-3 lg:px-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
