import { Container, Footer, Header, NftsTab, Typography } from "@/components"
import React from "react"
import { MetaData } from "./MetaData"

const Profile = () => {
  const { H3 } = Typography
  const items = [
    {
      name: "market",
      route: "/",
    },
    {
      name: "stack",
      route: "/",
    },
    {
      name: "launchpad",
      route: "/launchpad",
    },
  ]
  return (
    <main>
      <Header navItems={items} active="market" />
      <Container>
        <div>
          <H3>Profile</H3>
          <MetaData />
        </div>
        <NftsTab />
      </Container>
      <Footer />
    </main>
  )
}

export default Profile
