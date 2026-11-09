"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

// Apple-inspired capsule system — Linen & Sienna (espresso / porcelain / burnt sienna).
// Variants: primary / secondary / tertiary / accent / glass / icon.
// Hover lifts ~1px + scale 1.015; pressed scales 0.98; focus ring burnt sienna.
// Framer Motion is used across the site; buttons use CSS spring-like transitions
// + active feedback to stay keyboard-fast (reduced-motion handled in globals.css).
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border text-[15px] font-medium whitespace-nowrap outline-none select-none transition-[transform,background-color,color,border-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-[#B64A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE7] hover:scale-[1.015] hover:-translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100 disabled:hover:translate-y-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "border-[#28221E] bg-[#28221E] text-[#FBF9F5] shadow-[0_1px_2px_rgba(40,34,30,0.18),0_4px_14px_rgba(40,34,30,0.12)] hover:bg-[#37302B] hover:shadow-[0_1px_2px_rgba(40,34,30,0.18),0_6px_18px_rgba(40,34,30,0.16)]",
        secondary:
          "border-[#EEE8E0] bg-[#FBF9F5]/85 backdrop-blur-md text-[#28221E] shadow-[0_1px_2px_rgba(40,34,30,0.06)] hover:border-[#B64A32]/50 hover:bg-[#FBF9F5] hover:shadow-[0_2px_8px_rgba(40,34,30,0.08)]",
        tertiary:
          "border-transparent bg-transparent text-[#28221E] hover:bg-[#28221E]/[0.05] hover:text-[#B64A32]",
        accent:
          "border-[#B64A32] bg-[#B64A32] text-[#FBF9F5] shadow-[0_1px_2px_rgba(182,74,50,0.18),0_4px_14px_rgba(182,74,50,0.14)] hover:bg-[#963A27] hover:shadow-[0_1px_2px_rgba(182,74,50,0.18),0_6px_18px_rgba(182,74,50,0.18)]",
        glass:
          "border-[#EEE8E0]/80 bg-[#FBF9F5]/70 backdrop-blur-xl text-[#28221E] shadow-[0_4px_20px_rgba(40,34,30,0.10),inset_0_1px_0_rgba(251,249,245,0.8)] hover:bg-[#FBF9F5]/90 hover:border-[#B64A32]/40 hover:shadow-[0_6px_24px_rgba(40,34,30,0.14),inset_0_1px_0_rgba(251,249,245,1)]",
        icon: "border-[#EEE8E0] bg-[#FBF9F5]/85 backdrop-blur-md text-[#28221E] shadow-[0_1px_2px_rgba(40,34,30,0.08)] hover:border-[#B64A32]/50 hover:bg-[#FBF9F5]",
        default:
          "border-[#28221E] bg-[#28221E] text-[#FBF9F5] shadow-[0_1px_2px_rgba(40,34,30,0.18),0_4px_14px_rgba(40,34,30,0.12)] hover:bg-[#37302B]",
        outline:
          "border-[#EEE8E0] bg-[#FBF9F5]/85 backdrop-blur-md text-[#28221E] shadow-[0_1px_2px_rgba(40,34,30,0.06)] hover:bg-[#FBF9F5]",
        ghost:
          "border-transparent bg-transparent text-[#28221E] hover:bg-[#28221E]/[0.05]",
      },
      size: {
        default: "h-11 gap-2 px-6 has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        sm: "h-11 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        lg: "h-12 gap-2 px-7 text-base has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        xs: "h-11 gap-1.5 px-4 text-sm",
        icon: "size-11 rounded-full p-0",
        "icon-xs": "size-11 rounded-full p-0",
        "icon-sm": "size-11 rounded-full p-0",
        "icon-lg": "size-12 rounded-full p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  loading?: boolean;
  external?: boolean;
} & VariantProps<typeof buttonVariants>;

function Button({ className, variant = "primary", size = "default", href, loading, external, disabled, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));
  const content = loading ? (
    <>
      <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      <span className="sr-only">Loading</span>
      {children}
    </>
  ) : children;
  if (href) {
    const p = props as AnchorHTMLAttributes<HTMLAnchorElement> & { "aria-label"?: string; title?: string; id?: string; onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] };
    return (
      <a
        data-slot="button"
        href={href}
        className={cn(classes, (disabled || loading) && "pointer-events-none opacity-50")}
        aria-disabled={disabled || loading}
        aria-label={p["aria-label"]}
        title={p.title}
        id={p.id}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={p.onClick}
      >
        {content}
      </a>
    );
  }
  return (
    <button data-slot="button" type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"} className={classes} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>
      {content}
    </button>
  );
}

export { Button, buttonVariants };
