import { Container, Footer, Header, NftsTab, Typography } from "@/components"
import React from "react"
import { MetaData } from "./MetaData"
import { in_app_nav_items } from "@/constants/nav-urls"

const { H3 } = Typography

const Profile = () => {
  return (
    <main>
      <Header navItems={in_app_nav_items} active="profile" />
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
