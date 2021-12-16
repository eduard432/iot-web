import { useCallback, useEffect } from 'react';
import io from 'socket.io-client'

const baseUrl = process.env.REACT_APP_API_URL

//TODO: envíar el key del dashboard activo

export const useSocket = () => {

    const [socket, setSocket] = useState(null)
    const [online, setOnline] = useState(false)

    const connectSocket = useCallback(() => {

        const token = localStorage.getItmem('token')

        const socketTemp = io.connect(baseUrl, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'x-token': token,
                'x-key': 'Dashboard key'
            }
        })

        setSocket(socketTemp)

    }, [baseUrl])

    const disconnectSocket = useCallback(() => {
        socket?.disconnect()
    }, [socket])

    useEffect(() => {
        setOnline(socket?.connected)
    }, [socket])

    useEffect(() => {
        socket?.on('connect', () => setOnline(true))
    }, [socket])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline(false))
    }, [socket])

    return {
        socket,
        online,
        connectSocket,
        disconnectSocket
    }

}