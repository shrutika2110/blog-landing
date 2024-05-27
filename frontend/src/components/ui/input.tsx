import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded border border-primary bg-white px-3 py-2 text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-150 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 dark:border-secondary-800 dark:bg-secondary-950 dark:ring-offset-secondary-950 dark:placeholder:text-secondary-400 dark:focus-visible:ring-secondary-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
