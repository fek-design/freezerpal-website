import React from 'react';
import { cn } from '../lib/utils';

interface LiquidGLProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function LiquidGL({ className, children, as: Component = 'div', ...props }: LiquidGLProps) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.07)]",
        // Shimmer shining effect
        "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:z-0",
        // Liquid reflection effect
        "after:absolute after:inset-0 after:bg-gradient-to-tr after:from-white/0 after:via-white/30 after:to-white/0 after:opacity-60 after:z-0",
        className
      )}
      {...props}
    >
      <div className="relative z-10 w-full h-full text-inherit flex flex-col justify-center items-center">
        {children}
      </div>
    </Component>
  );
}

export function LiquidButton({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "relative overflow-hidden bg-brand-accent/80 backdrop-blur-xl border border-white/40 shadow-[0_4px_16px_rgba(170,221,74,0.3)] transition-all hover:bg-brand-accent active:scale-95",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:z-0",
        "after:absolute after:inset-0 after:bg-gradient-to-tr after:from-white/0 after:via-white/40 after:to-white/0 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:z-0",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">{children}</span>
    </button>
  );
}
