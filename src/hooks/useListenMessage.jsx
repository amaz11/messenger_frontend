import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthUser'
import { SocketContext } from '../context/SocketContext'
import useMessage from './useMessage'

const useListenMessage = () => {
    const { conversation, messages, } = useContext(AuthContext)
    const { socket } = useContext(SocketContext)
    const { getMessages } = useMessage

    useEffect(() => {
        // console.log(socket.on('newMessage'));
        if (socket) {
            socket.on('newMessage', (newMessage) => {
                console.log(newMessage);
                // // setMessages([...messages, newMessage]);
                // getMessages(conversation.id)
            })
        }

        console.log('newMessage');
        return () => socket?.off('newMessage')
    }, [socket, messages])

}

export default useListenMessage