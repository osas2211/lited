"use client"
import { Header, Footer } from "@/components"
import { Hero } from "@/components/Landing-Page/Hero"
import { ReImagine } from "@/components/Landing-Page/ReImagine"
import { in_app_nav_items } from "@/constants/nav-urls"

export default function Home() {
  return (
    <main className="relative">
      <Header active="" navItems={in_app_nav_items} />
      <Hero />
      <ReImagine />
      <Footer />
    </main>
  )
}
