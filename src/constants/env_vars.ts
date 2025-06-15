"use client"
export const env_vars = {
  tomo_client_id: process.env.NEXT_PUBLIC_TOMO_CLIENT_ID!!,
  wallet_connect_project_id:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!!,
  pinata_gateway: process.env.NEXT_PUBLIC_GATEWAY_URL!!,
  RPC_PROVIDER_URL: process.env.NEXT_PUBLIC_RPC_PROVIDER_URL!!,
}
