import React from 'react'
import { Link } from "gatsby"
import './HeroSection.scss'
import { Button, ButtonIcon } from '../ButtonElements'

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Bi-Weekly</h1>
      <div className="hero-btns">
        <Link to="/blog">
          <Button fontBig big primary>TO THE MOON <ButtonIcon /></Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection