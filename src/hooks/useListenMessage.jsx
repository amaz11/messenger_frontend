import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthUser'
import { SocketContext } from '../context/SocketContext'
import notificationMp3 from '../assets/notification.mp3'

const useListenMessage = () => {
    const { messages, setMessages } = useContext(AuthContext)
    const { socket } = useContext(SocketContext)

    useEffect(() => {
        if (socket) {
            socket.on('newMessage', (newMessage) => {
                newMessage.shouldShake = true
                const notification = new Audio(notificationMp3)
                notification.play()
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