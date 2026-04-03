"use client";

import { ParallaxProvider } from "react-scroll-parallax";

type Props = {
  children: React.ReactNode;
};

export function AppParallaxProvider({ children }: Props) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
