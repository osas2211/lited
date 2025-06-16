<p align="center">
  <img src="./public/assets/logo.svg" width="120" alt="LiTED Logo" />
</p>

<h1 align="center">LiTED: The Intellecture Platform for Artistes</h1>

> 🚀 Redefining how artistes **move**, **scale**, and **express** themselves in a decentralized world.

---

## 🧠 Powered by Story Protocol

<img src="./public/story.png" height="40" alt="Story Protocol Logo" />

LiTED is built on **Story Protocol** — the World's first _Intellecture Blockchain_ — a purpose-built Layer 1 chain for registering, managing, and monetizing creative intelligence. LiTED leverages this to tokenize IP, support derivations, enable tipping, and manage royalties transparently.

---

## 🎨 What is LiTED?

**LiTED** is your creative passport to the decentralized web. Whether you’re a musician, painter, writer, photographer, or memer — LiTED empowers you to:

- 🎫 **Register your IPs** on-chain (music, images, ideas, etc.)
- 🛒 **Sell & showcase** your art in our dynamic marketplace
- 🔴 **Go Live** with your fans & monetize direct engagement
- 🎁 **Earn** through tipping, royalties, and IP reuse (derivatives)

---

## 🔥 Features Breakdown

### 🧾 1. IP Registration + Tokenization

Register your intellectual property across various mediums and tokenize them into NFTs or other programmable digital assets. This ensures:

- ✅ Verifiable ownership
- ✅ Provable scarcity
- ✅ Instant market readiness

### 🏪 2. Dynamic IP Marketplace

All tokenized IPs are showcased in a vibrant marketplace where:

- Fans, collectors, and investors can **buy or collaborate**
- Artists get **paid directly** without intermediaries
- Ownership and value are transparent on-chain

### 🎤 3. Interactive Live Engagement (Coming Soon)

Artistes will be able to:

- Go live for performances & collaborations
- Do Q&A, showcase drops, get tips
- Build deeper bonds with their supporters

---

## 🔐 Powered by Tomo Wallet for Web3 Auth

<img src="./public/tomo.avif" height="40" alt="Tomo Wallet Logo" />

I integrated [**Tomo Wallet**](https://docs.tomo.inc/tomo-sdk/tomoevmkit/quick-start) for sleek wallet authentication and user session management. The wallet flow supports:

- ✅ Multi-wallet support (MetaMask, Rainbow, WalletConnect)
- ✅ Dark theme
- ✅ Easy-to-use custom connect button

**Code Snippets:**

### 🔧 TomoProvider – `src/components/Providers/TomoProvider.tsx`

```tsx
imports
...
const config = getDefaultConfig({
  clientId: env_vars.tomo_client_id,
  appName: "LiTED",
  projectId: env_vars.wallet_connect_project_id,
  chains: [storyAeneid],
  ssr: true,
  wallets: [
    {
      groupName: "Popular",
      wallets: [metaMaskWallet, rainbowWallet, walletConnectWallet],
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
```

### 🔌 TomoSocialConnect – `src/components/ConnectWallet/TomoSocialConnect/index.tsx`

```tsx
const { openConnectModal } = useConnectModal()
const acc = useAccount()
...
<Button
  prefixicon={<Image src="/tomo.avif" height={30} width={30} alt="" />}
  onClick={() => handleConnectWallet()}
>
  Connect Wallet
</Button>
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js (React)
- **Blockchain**: Story Protocol (L1)
- **Wallet Auth**: Tomo Wallet + Wagmi + WalletConnect
- **Design System**: TailwindCSS + Custom Components
- **Deployment**: Vercel (🚀 [Live site](http://lited.vercel.app/))

---

## 🧪 Getting Started Locally

Clone and run the app locally with these steps:

```bash
# 1. Clone the repository
git clone https://github.com/osas2211/lited.git
cd lited

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your NEXT_PUBLIC_TOMO_CLIENT_ID, NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID, NEXT_PUBLIC_RPC_PROVIDER_URL, PINATA_API_KEY, PINATA_API_SECRET, PINATA_JWT, NEXT_PUBLIC_GATEWAY_URL, NEXT_PUBLIC_PINATA_JWT

# 4. Run the development server
npm run dev

# 5. Open the app in your browser
http://localhost:3000
```

> Note: You need access to the Story Protocol testnet and a registered account on Tomo.

---

## 🗺️ Roadmap

- ✅ IP Registration + Tokenization
- ✅ Wallet-based onboarding with Tomo
- ✅ IP Marketplace
- ✅ Collab-creation: remix & derivation support
- ✅ NFT Vault-based royalty streaming
- 🚧 Fan-creator live engagements using Story Protocol
- 🚧 Bidding & auctions for IP assets

---

## 🤝 Contribution

I welcome collaborators, contributors, and creatives. Please:

- Star ⭐ the repo
- Fork & submit PRs
- Or open issues with your suggestions

---

## 💡 Inspiration

> “The future of creative ownership is programmable.”

LiTED is born out of a belief that artists should **own, control, and scale** their creativity without gatekeepers. By tokenizing intelligence and removing middlemen, we’re shaping the next renaissance — on-chain.

---

## 🏁 Hackathon Details

- **Hackathon Host**: 🧠 Story Protocol
- **Chain Used**: Story Intellecture L1
- **Focus**: Empowering IP creators through tokenization, direct monetization, and dynamic engagement

## 🧬 License

[MIT](LICENSE)

---

<p align="center">
  Built with ❤️ for the creative economy, by <strong>LiTED</strong>.
</p>
