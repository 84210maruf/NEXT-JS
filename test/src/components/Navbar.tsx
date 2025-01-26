"use client"
import { Briefcase, FileText, Home, Shield, ShieldBan, User, UserIcon } from 'lucide-react'
import React from 'react'
import { TubeLightNavBar } from './ui/tubelight-navbar'

const Navbar = () => {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Unprotected', url: '/unprotected', icon: ShieldBan },
        { name: 'Protected', url: '/protected', icon: Shield },
        { name: 'Profile', url: '/profile', icon: UserIcon }
      ]
    return (
    <TubeLightNavBar items={navItems} />
  )
}

export default Navbar
