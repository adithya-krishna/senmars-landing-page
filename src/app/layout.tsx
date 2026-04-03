import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { AppParallaxProvider } from "@/components/providers/parallax-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Senmar Services | Secure Document Destruction",
  description:
    "Secure, compliant and reliable document destruction services for organizations across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${poppins.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppParallaxProvider>{children}</AppParallaxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
