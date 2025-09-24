import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarApp } from "@/components/Sidebar";
import { cookies } from "next/headers";
import "./globals.css";
import { SidebarButton } from "@/components/sidebar_button";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarClose } from "@/components/sidebar_close";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Home | Blogify",
  description:
    "Blogify is an open-source nextjs blog template design with tailwind CSS.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <SidebarProvider
            className="flex flex-col sm:flex-row"
            defaultOpen={false}
          >
            <SidebarApp />
            <SidebarInset>
              <SidebarButton />
              <main className="mx-auto p-4">{children}</main>
            </SidebarInset>
          </SidebarProvider>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
