import type { Metadata } from "next";
import { Space_Grotesk, Newsreader, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Menu } from "@/components/Menu";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Oak Cooper — Senior Fullstack Engineer",
  description:
    "Product engineer who builds the UI and owns the outcome for the user. Twenty-five years in software: .NET, Angular, Vue, NestJS, TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full">
        <Menu />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
