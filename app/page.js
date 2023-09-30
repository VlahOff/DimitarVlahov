import ContactMe from './(sections)/contactMe/ContactMe';
import Hero from './(sections)/hero/Hero';
import Projects from './(sections)/projects/Projects';
import TechStack from './(sections)/techStack/TechStack';

export default function Home() {
	return (
		<>
			<Hero />
			<TechStack />
			<Projects />
			<ContactMe />
		</>
	);
}
