import { Footer, Header } from "@/components"
import { in_app_nav_items } from "@/constants/nav-urls"
import React from "react"
import { Form } from "./form"

const RegisterIPPage = () => {
  return (
    <div>
      <Header navItems={in_app_nav_items} active="Register IP" />
      <div className="md:p-[80px] md:py-[40px] px-[1rem] py-[2rem]">
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default RegisterIPPage
