import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
