"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "../../lib/utils";

export function Button2({
  borderRadius = "1.25rem", // Adjusted to match 20px (1.25rem)
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 4000, // Slightly slower for smoother effect
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        // Badge styles: frosted glass effect
        "flex w-full max-w-fit items-center justify-center gap-2 bg-[#ffffff21] rounded-[20px] border-[none] backdrop-blur-[47px] p-[1px] backdrop-brightness-[100%] relative overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="20px" ry="20px">
          <div
            className={cn(
              // Adjusted gradient to match a vibrant, moving border
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] translate-y-1 opacity-[0.7]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          // Transparent background for inner content, matching Badge
          "relative flex h-full w-full items-center justify-center text-white bg-transparent antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
          backgroundColor:"gray"
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 4000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

// Usage:
<Button2
  borderRadius="1.25rem"
  className="w-full px-3 py-2 h-full bg-transparent text-white"
>
  <span
    className="font-medium text-[10px] md:text-[12px] lg:text-[16px] leading-[16px] text-center px-4 sm:text-base sm:leading-[25.6px] bg-transparent"
  >
    🎉 Transforming Midwest Real Estate—25% ROI Delivered.
  </span>
</Button2>