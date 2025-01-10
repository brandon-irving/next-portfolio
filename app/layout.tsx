import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter } from "next/font/google";
import { personal } from "./data/personal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${personal.name} | Portfolio`,
  description:
    "A showcase of my work and skills primarily using React, React Native, Typescript, Node and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
