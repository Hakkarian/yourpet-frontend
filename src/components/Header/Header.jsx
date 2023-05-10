import AuthNav from 'components/AuthNav'
import Nav from 'components/Nav/Nav'
import UserNav from 'components/UserNav'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/main'>Logo</Link>
      <nav>
        <Nav />
        <AuthNav />
        <UserNav />
      </nav>
    </header>
  )
}

export default Header