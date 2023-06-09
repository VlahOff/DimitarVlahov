import { useState } from 'react';

import ContactMe from './components/contactMe/ContactMe';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import MessageModal from './components/messageModal/MessageModal';
import Projects from './components/projects/Projects';
import TechStack from './components/techStack/TechStack';

function App() {
  document.body.style.overflowX = 'hidden';
  const [isModalShown, setIsModalShown] = useState(false);
  const [message, setMessage] = useState('');

  const toggleModal = (message) => {
    setMessage(message);
    setIsModalShown((state) => !state);
  };

  return (
    <>
      {isModalShown && (
        <MessageModal toggleModal={toggleModal} message={message} />
      )}
      <Header />
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
