import NavBar from '@/components/navBar/NavBar';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Raleway } from 'next/font/google';
import './globals.css';

config.autoAddCss = false;
const raleway = Raleway({ preload: true, subsets: ['latin'] });

export const metadata = {
	title: 'Dimitar Vlahov',
	description: 'Dimitar Vlahov`s portfolio web site',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<header>
					<NavBar />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
