import React from 'react'
import './header.scss'

const header = () => {
  return (
    <header className="header-wrapper">
      <div className="search"><i className="fas fa-search"></i></div>
      <nav className="navigation">
        <a className="active" href='/blog'>Blog</a>
        <a href='/questions'>Questions</a>
        <a href='/companies'>Companies</a>
        <a href='/contact'>Contact</a>
      </nav>
      <div className="header-extras">
        <i className="fas fa-cog"></i>
        <span><i className="fas fa-envelope-open-text"></i><sup>4</sup></span>
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </header>
  )
}

export default header;