import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const AuthorMessagesView = () => {
    const { postId } = useParams();
    const auth = sessionStorage.getItem('token');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchAuthorMessages() {
            try {
                const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
                    headers: {
                        'Authorization': `Bearer ${auth}`
                    }
                });

                const result = await response.json();
                setMessages(result.data.messages);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAuthorMessages();
    }, [postId, auth]);

    return (
        <div>
            <h1>Received Messages for Post {postId}</h1>
            {messages.map(message => (
                <div key={message._id}>
                <p>Sender: {message.fromUser.username}</p>
                <p>Content: {message.content}</p>
                </div>
            ))}
        </div>
    );
}
export default AuthorMessagesView;