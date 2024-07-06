'use client'

import { COOKIES, initializeCookies, initializeSocket, socket } from '@/helpers'
import { useEffect, useState } from 'react'

const Home = () => {
  const { getCookie, setCookie } = initializeCookies()
  const isConnected = initializeSocket(getCookie(COOKIES.JWT))

  setCookie('id', 'Cowabunga')

  useEffect(() => {
    console.log(isConnected)
  }, [isConnected])

  return <div>AAAAA</div>
}

export default Home
