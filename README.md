<p align="center">
  <img src="/assets/logo.svg" width="120" alt="LiTED Logo" />
</p>

<h1 align="center">LiTED: The Intellecture Platform for Artistes</h1>

> 🚀 Redefining how artistes **move**, **scale**, and **express** themselves in a decentralized world.

---

## 🧠 Powered by Story Protocol

<img src="/story.png" height="40" alt="Story Protocol Logo" />

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

<img src="/tomo.avif" height="40" alt="Tomo Wallet Logo" />

We integrated [**Tomo Wallet**](https://tomo.lol/) for sleek wallet authentication and user session management. The wallet flow supports:

- ✅ Multi-wallet support (MetaMask, Rainbow, WalletConnect)
- ✅ Dark theme
- ✅ Easy-to-use custom connect button

**Code Snippets:**

### 🔧 TomoProvider – `src/components/Providers/TomoProvider.tsx`

```tsx
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
```
