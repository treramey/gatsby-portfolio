import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./about.scss"

const AboutButton = ({ text }) => {
  return (
    <AniLink
      to="/projects"
      cover
      direction="left"
      duration={1}
      bg="#1D1D1D"
      className="button"
    >
      <button className="button__top">{text}</button>
      <button className="button__bottom">{text}</button>
    </AniLink>
  )
}

export default AboutButton
