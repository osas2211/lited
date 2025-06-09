"use client"
import React from "react"
import {
  darkTheme,
  getDefaultConfig,
  TomoEVMKitProvider,
} from "@tomo-inc/tomo-evm-kit"
import { WagmiProvider } from "wagmi"
import { sepolia } from "wagmi/chains"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { env_vars } from "@/constants/env_vars"
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@tomo-inc/tomo-evm-kit/wallets"

import "@tomo-inc/tomo-evm-kit/styles.css"

const config = getDefaultConfig({
  clientId: env_vars.tomo_client_id,
  appName: "LiTED",
  projectId: env_vars.wallet_connect_project_id,
  chains: [sepolia],
  ssr: true, // If your dApp uses server-side rendering (SSR),
  wallets: [
    {
      groupName: "Popular",
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        walletConnectWallet, // Add other wallets if needed
      ],
    },
  ],
})

const queryClient = new QueryClient()

export const TomoProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <TomoEVMKitProvider
          theme={darkTheme({
            accentColor: "#ED5B7A",
            accentColorForeground: "white",
          })}
        >
          {children}
        </TomoEVMKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
