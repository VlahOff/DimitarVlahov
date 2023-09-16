import { useState } from 'react';

import ContactMe from './sections/contactMe/ContactMe';
import Hero from './sections/hero/Hero';
import MessageModal from './components/messageModal/MessageModal';
import NavBar from './components/navBar/NavBar';
import Projects from './sections/projects/Projects';
import TechStack from './sections/techStack/TechStack';

function App() {
	document.body.style.overflowX = 'hidden';
	const [isModalShown, setIsModalShown] = useState(false);
	const [message, setMessage] = useState('');

	const toggleModal = message => {
		setMessage(message);
		setIsModalShown(state => !state);
	};

	return (
		<>
			{isModalShown && (
				<MessageModal
					toggleModal={toggleModal}
					message={message}
				/>
			)}
			<header>
				<NavBar />
			</header>
			<main>
				<Hero />
				<TechStack />
				<Projects />
				<ContactMe toggleModal={toggleModal} />
			</main>
		</>
	);
}

export default App;
