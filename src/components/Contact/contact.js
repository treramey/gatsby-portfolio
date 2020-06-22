import React from "react"
import "./contact.scss"

const Contact = () => {
  return (
    <div class="contact">
      <ul class="contact__list">
        <li class="contact__item">
          <a
            href="https://www.linkedin.com/in/treramey/"
            target="_blank"
            class="contact__link contact__link-linkedin"
          >
            <span class="contact__label">Linkedin</span>
            <font-awesome-icon icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li class="contact__item">
          <a
            href="https://github.com/treramey"
            target="_blank"
            class="contact__link contact__link-github"
          >
            <span class="contact__label">Github</span>
            <font-awesome-icon icon="['fab', 'github']" />
          </a>
        </li>

        <li class="contact__item">
          <a
            href="mailto:hello@treramey.dev"
            target="_blank"
            class="contact__link contact__link-email"
          >
            <span class="contact__label">Email</span>
            <font-awesome-icon icon="['far', 'envelope']" />
          </a>
        </li>

        <li class="contact__item">
          <a
            href="https://drive.google.com/file/d/1Ve9kGzylOyERVpH5iGphpWuwUfOs9nkf/view?usp=sharing"
            target="_blank"
            class="contact__link contact__link-resume"
          >
            <span class="contact__label">Resume</span>
            <font-awesome-icon icon="['far', 'file']" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
