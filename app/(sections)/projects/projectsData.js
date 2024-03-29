import Aniline from '../../../public/Aniline.png';
import BulgarianDrivers from '../../../public/BulgarianDrivers.png';
import MovieDb from '../../../public/MovieDB.png';
import Portfolio from '../../../public/Portfolio.png';
import Positivus from '../../../public/Positivus.png';
import CryptoArt from '../../../public/CryptoArt.png';
import PortfolioTemplate from '../../../public/PortfolioTemplate.png';

export const projects = [
	{
		title:'Positivus',
		description: 'This is not functional website, just an implemented design.',
		image: Positivus,
		techStackFront:[
			'JavaScript',
			'ReactJS',
			'HTML',
			'CSS',
		],
		liveLink: 'https://positivus-psi.vercel.app/',
		designLink: 'https://www.figma.com/community/file/1230604708032389430',
		repoLink:'https://github.com/VlahOff/portfolio-projects/tree/main/positivus'
	},
	{
		title:'CryptoArt',
		description: 'This is not functional website, just an implemented design.',
		image: CryptoArt,
		techStackFront:[
			'JavaScript',
			'ReactJS',
			'HTML',
			'CSS',
		],
		liveLink: 'https://crypto-art-swart.vercel.app/',
		designLink: 'https://www.figma.com/community/file/1257062858453316868',
		repoLink:'https://github.com/VlahOff/portfolio-projects/tree/main/crypto-art'
	},
	{
		title:'PortfolioTemplate',
		description: 'This is not functional website, just an implemented design.',
		image: PortfolioTemplate,
		techStackFront:[
			'JavaScript',
			'ReactJS',
			'HTML',
			'CSS',
		],
		liveLink: 'https://portfolio-two-kappa-65.vercel.app/',
		designLink: 'https://www.figma.com/community/file/1255560955410429196/KC-Studio-%E2%9C%A8-Portfolio-Template',
		repoLink:'https://github.com/VlahOff/portfolio-projects/tree/main/portfolio'
	},
	{
		title: 'Aniline',
		description:
			'This web app is designed to track crypto prices, you can get a detailed look in the chart. You can track your portfolio`s P&L, and there is also a crypto converter.',
		image: Aniline,
		techStackFront: [
			'JavaScript',
			'ReactJS',
			'Redux',
			'React Router',
			'Lightweight Charts',
			'HTML',
			'CSS',
		],
		techStackBack: ['NodeJs', 'Express', 'MongoDB', 'JWT'],
		repoLink: 'https://github.com/VlahOff/Aniline2',
		liveLink: 'https://aniline.vercel.app/',
	},
	{
		title: 'BulgarianDrivers',
		description:
			'This is a web app to write reviews for drivers based on their license plate number. The app provides a simple interface where users can enter the license plate number of the driver they want to review and then submit their review. Users can write a review, describing their experience with the driver, and provide a title for their review.',
		image: BulgarianDrivers,
		techStackFront: [
			'JavaScript',
			'ReactJS',
			'Redux',
			'React Router',
			'HTML',
			'CSS',
		],
		techStackBack: ['NodeJs', 'Express', 'MongoDB', 'JWT'],
		repoLink: 'https://github.com/VlahOff/BulgarianDrivers',
		liveLink: 'https://bulgarian-drivers.vercel.app/',
	},
	{
		title: 'PersonalPortfolio',
		image: Portfolio,
		techStackFront: ['Next.JS', 'HTML', 'CSS', 'EmailJs'],
		repoLink: 'https://github.com/VlahOff/PersonalPortfolio',
	},
	{
		title: 'MovieDB',
		description:
			'This is a simple website for searching information about movies. Users could enter the name of a movie they are interested in and the website would display relevant information such as the plot summary, cast and crew, release date, and ratings from various sources.',
		image: MovieDb,
		techStackFront: ['JavaScript', 'ReactJS', 'HTML', 'CSS'],
		repoLink: 'https://github.com/VlahOff/MovieDB',
		liveLink: 'https://movie-db-omega-red.vercel.app/',
	},
];
