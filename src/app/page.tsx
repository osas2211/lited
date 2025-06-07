"use client"
import { Typography, Header, Container, Footer } from "@/components"
import { MarketGrid } from "@/components/Grid/MarketGrid"
import { MarketTab } from "@/components/Grid/MarketTab"
import { Hero } from "@/components/Landing-Page/Hero"
import { in_app_nav_items } from "@/constants/nav-urls"

const { H3, Subtitle1Regular } = Typography
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header active="" navItems={in_app_nav_items} />
      <Hero />
    </main>
  )
}
