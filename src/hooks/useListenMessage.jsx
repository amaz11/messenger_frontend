import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthUser'
import { SocketContext } from '../context/SocketContext'

const useListenMessage = () => {
    const { messages, setMessages } = useContext(AuthContext)
    const { socket } = useContext(SocketContext)

    useEffect(() => {
        if (socket) {
            socket.on('newMessage', (newMessage) => {
                setMessages([newMessage, ...messages]);
            })
            socket.on('myMessage', (newMessage) => {
                setMessages([newMessage, ...messages]);

            })
        }
        return () => socket?.off('newMessage')
    }, [socket, setMessages, messages])

}

export default useListenMessage