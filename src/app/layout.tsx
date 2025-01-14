import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";

import "@/styles/globals.css";

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata = {
  title: "Paws for Hope",
  description: "A Community App made for those who care about pets and want to participate and work for their betterment.",
};

export default function RootLayout({
  children,
  // authModal,
}: {
  children: React.ReactNode;
  // authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={cn("antialiased",fontHeading.variable,fontBody.variable)}>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {/* {authModal} */}
            {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
