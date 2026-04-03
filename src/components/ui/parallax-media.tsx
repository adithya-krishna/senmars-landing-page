"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { cn } from "@/lib/utils";

type ParallaxMediaProps = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  className?: string;
  mediaClassName?: string;
  priority?: boolean;
  sizes?: string;
  speed?: number;
  signalReady?: boolean;
};

const READY_EVENT = "senmar:above-fold-ready";

export function ParallaxMedia({
  type,
  src,
  alt,
  poster,
  className,
  mediaClassName,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 45vw",
  speed = -8,
  signalReady = false,
}: ParallaxMediaProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const emittedRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mediaQuery.matches);
    onChange();
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const signalAboveFoldReady = () => {
    if (!signalReady || emittedRef.current) {
      return;
    }
    emittedRef.current = true;
    window.dispatchEvent(new Event(READY_EVENT));
  };

  return (
    <Parallax speed={reducedMotion ? 0 : speed}>
      <div className={cn("relative overflow-hidden", className)}>
        {type === "image" ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            onLoad={signalAboveFoldReady}
            className={cn("object-cover", mediaClassName)}
          />
        ) : (
          <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload={priority ? "auto" : "metadata"}
            onLoadedData={signalAboveFoldReady}
            className={cn("h-full w-full object-cover", mediaClassName)}
          />
        )}
      </div>
    </Parallax>
  );
}
