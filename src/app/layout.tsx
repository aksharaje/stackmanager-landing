import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StackManager.ai - Intelligent Stack Management",
  description: "Manage your technology stack with AI-powered insights and automation. Simplify infrastructure, optimize performance, and scale effortlessly.",
  keywords: ["stack management", "AI", "infrastructure", "DevOps", "automation"],
  authors: [{ name: "StackManager" }],
  openGraph: {
    title: "StackManager.ai - Intelligent Stack Management",
    description: "Manage your technology stack with AI-powered insights and automation.",
    url: "https://stackmanager.ai",
    siteName: "StackManager.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackManager.ai - Intelligent Stack Management",
    description: "Manage your technology stack with AI-powered insights and automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
