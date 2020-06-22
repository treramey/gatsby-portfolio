import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHeader from "../components/About/AboutHeader"
import AboutSubHeader from "../components/About/AboutSubHeader"
import AboutButton from "../components/About/AboutButton"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <div className="about">
        <AboutHeader />
        <AboutSubHeader text="I'm a software developer and designer. Follow my daily design work on Dribbble. You can also find me on Twitter, GitHub, and LinkedIn." />
        <AboutButton text="View Projects" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
