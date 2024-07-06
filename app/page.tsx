'use client'

import { COOKIES, initializeCookies, initializeSocket, socket } from '@/helpers'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const Home = () => {
  const { getCookie, setCookie } = initializeCookies()
  const { isConnected, setIsConnected } = initializeSocket(
    getCookie(COOKIES.JWT)
  )

  useEffect(() => {
    console.log(isConnected)
  }, [isConnected])

  return <div>{isConnected}</div>
}

export default Home
