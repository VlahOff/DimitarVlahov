import { useState } from 'react';

import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Hero from './components/Hero';
import MessageModal from './components/MessageModal';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  document.body.style.overflowX = 'hidden';
  const [isModalShown, setIsModalShown] = useState(false);
  const [message, setMessage] = useState('');

  const toggleModal = (message) => {
    setMessage(message);
    setIsModalShown(state => !state);
  };

  return (
    <>
      {isModalShown && <MessageModal toggleModal={toggleModal} message={message} />}
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
