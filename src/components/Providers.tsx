"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const activeChain = "sepolia";

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID} activeChain={activeChain}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </ThirdwebProvider>
  );
};

export default Providers;
