import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthUser'
import { SocketContext } from '../context/SocketContext'
import useMessage from './useMessage'

const useListenMessage = () => {
    const { messages, setMessages } = useContext(AuthContext)
    const { socket } = useContext(SocketContext)

    useEffect(() => {
        if (socket) {
            socket.on('newMessage', (newMessage) => {
                console.log(newMessage);
                setMessages([...messages, newMessage]);
            })
        }
        return () => socket?.off('newMessage')
    }, [socket, setMessages, messages])

}

export default useListenMessage