import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 border border-white/40 focus:border-teal-400/50 bg-zinc-900/30 px-4 py-5 outline-none focus:ring-0 placeholder:text-white/30",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
