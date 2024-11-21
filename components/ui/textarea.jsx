import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-zinc-100/20 bg-zinc-900/60 px-3 py-2 text-base placeholder:text-white/40 focus-visible:outline-none text-white focus:border-teal-400/50 outline-none focus:ring-0 md:text-sm ",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
