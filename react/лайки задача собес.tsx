import { useEffect, useRef, useState } from 'react';
// import { AppRouter } from './router/appRouter';
import './styles.scss';

interface IMessage {
	id: number;
	name: string;
	likes: number;
}

export function App() {
	// return <AppRouter />;
	const [messages, updateMessages] = useState<IMessage[]>([]);
	const ref = useRef<HTMLInputElement>(null);
	const [likes, setLikes] = useState(0);

	const handleAddMessage = () => {
		const value = ref?.current?.value;
		if (value) {
			updateMessages(prevMessages => [...prevMessages, { id: Math.random(), name: value, likes: 0 }]);
			ref.current.value = '';
		}
	}

	const setLike = (messageId: number) => () => {
		const cloneMessages = Array.from(messages);
		cloneMessages.map((message, index) => {
			if (message.id === messageId) {
				cloneMessages[index] = { ...message, likes: message.likes + 1 };
			}
		});
		updateMessages(cloneMessages);
	}

	useEffect(() => {
		if (messages.length) {
			if (messages.length > 1) {
				console.log({ messages })
				let inc = 0;
				messages.forEach((message, index) => {
					if (index) {
						const prevMes = messages[index - 1];
						inc += message.likes + prevMes.likes;
					} else {
						inc += message.likes;
					}
				})
				setLikes(inc);

			} else {
				setLikes(messages[0].likes);
			}
		}
	}, [messages]);

	return (
		<>
			<div>likes count: {likes}</div>
			<div>
				{messages.map(message =>
					<div>
						<div>{message.likes}</div>
						<div>{message.name}</div>
						<button onClick={setLike(message.id)}>like</button>
					</div>
				)}
			</div>
			<input ref={ref} />
			<button onClick={handleAddMessage}>add message</button>
		</>
	);
}
