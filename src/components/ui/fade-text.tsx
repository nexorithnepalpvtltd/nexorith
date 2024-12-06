"use client";

import { ElementType, ReactNode, useMemo } from "react";

import { Variants, motion } from "framer-motion";

import { cn } from "@/utils/cn";

type FadeTextProps<T extends ElementType> = {
  as?: T; // Accept any element type, defaulting to 'span'
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  children: ReactNode;
} & React.ComponentPropsWithoutRef<T>; // Forward additional props to the custom element

export function FadeText<T extends ElementType = "span">({
  as,
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring" } },
  },
  children,
  ...rest // Capture and forward additional props
}: FadeTextProps<T>) {
  const Component = as || motion.span; // Default to motion.span if no custom component is provided

  const directionOffset = useMemo(() => {
    const map = { up: 30, down: -30, left: -30, right: 30 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...restVariants } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...restVariants,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
        filter: "blur(10px)",
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
        filter: "blur(0)",
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <Component
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_ANIMATION_VARIANTS}
      className={cn(className, "inline-block")}
      {...rest} // Forward the rest of the props
    >
      {children}
    </Component>
  );
}
