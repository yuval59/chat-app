import { env } from '@/env'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export let socket = io({ autoConnect: false })

export const initializeSocket = (jwt: string) => {
  socket = getNewSocketWithQuery(jwt)

  const [isConnected, setIsConnected] = useState(false)

  const onConnect = () => setIsConnected(true)
  const onDisconnect = () => setIsConnected(false)

  useEffect(() => {
    if (socket.connected) onConnect()

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  return { isConnected, setIsConnected }
}

const getNewSocketWithQuery = (jwt: string) =>
  io(env.NEXT_PUBLIC_SOCKET_HOST, {
    query: {
      jwt,
    },
  })
