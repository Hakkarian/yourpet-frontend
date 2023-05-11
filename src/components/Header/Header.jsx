import AuthNav from 'components/AuthNav'
import Nav from 'components/Nav/Nav'
import UserNav from 'components/UserNav'
import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderCss } from './Header.styled'
import image from '../../images/moblogo1x.png'

const Header = () => {
  return (
    <HeaderCss>
      <Link to='/main'><img src={image} alt="your pet" width='115' height='20'/></Link>
      <nav>
        <Nav />
        <AuthNav />
        <UserNav />
      </nav>
    </HeaderCss>
  )
}

export default Header