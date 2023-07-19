'use client'
import '../styles/globals.scss'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import {Fira_Code} from 'next/font/google'
import { Context } from './actions/context'
import { useState } from 'react'

const inter = Fira_Code({
  weight:['400','500','600','700'],
  style: ['normal'],
  preload: false
})

const metadata={
  title:'Games store',
  description:'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const [CartItems,setCartItems]=useState<any>([]);
  return (
    <html lang="en">
     <body className={inter.className}><Context.Provider value={{CartItems,setCartItems}}><Navbar/>{children}<Footer/></Context.Provider></body>
    </html>
  )
}
