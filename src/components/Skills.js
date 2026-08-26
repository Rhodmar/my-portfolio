import React from 'react';
import './Skills.css';

const logos = [
	{ href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', src: 'frame.png', alt: 'HTML' },
	{ href: 'https://www.mysql.com/', src: 'mysql_svgrepo.com.png', alt: 'MySQL' },
	{ href: 'https://www.python.org/', src: 'python_svgrepo.com.png', alt: 'Python' },
	{ href: 'https://www.djangoproject.com/', src: 'django_svgrepo.com.png', alt: 'Django' },
	{ href: 'https://reactjs.org/', src: 'react_1_logo_svgrepo.com.png', alt: 'React' },
	{ href: 'https://laravel.com/', src: 'laravel_svgrepo.com.png', alt: 'Laravel' },
	{ href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', src: 'skill-javascript.svg', alt: 'JavaScript' },
	{ href: 'https://nodejs.org/', src: 'skill-nodedotjs.svg', alt: 'Node.js' },
	{ href: 'https://www.figma.com/', src: 'skill-figma.svg', alt: 'Figma' },
	{ href: 'https://zapier.com/', src: 'skill-zapier.svg', alt: 'Zapier' },
	{ href: 'https://www.notion.so/', src: 'skill-notion.svg', alt: 'Notion' },
	{ href: 'https://wordpress.org/', src: 'skill-wordpress.svg', alt: 'WordPress' },
	{ href: 'https://www.adobe.com/products/premiere.html', src: 'skill-premierepro.svg', alt: 'Adobe Premiere Pro' },
	{ href: 'https://www.adobe.com/products/aftereffects.html', src: 'skill-aftereffects.svg', alt: 'Adobe After Effects' },
	{ href: 'https://www.adobe.com/products/photoshop.html', src: 'skill-photoshop.svg', alt: 'Adobe Photoshop' },
	{ href: 'https://www.capcut.com/', src: 'skill-capcut.svg', alt: 'CapCut' },
	{ href: 'https://www.descript.com/', src: 'skill-descript.svg', alt: 'Descript' },
	{ href: 'https://www.canva.com/', src: 'skill-canva.svg', alt: 'Canva' },
];

const row1 = logos.filter((_, i) => i % 2 === 0);
const row2 = logos.filter((_, i) => i % 2 === 1);

const MarqueeRow = ({ logos: rowLogos, reverse }) => (
	<div className={`marquee-row ${reverse ? 'reverse' : ''}`}>
		<div className="marquee-track">
			{[...rowLogos, ...rowLogos].map((logo, i) => (
				<a
					href={logo.href}
					target="_blank"
					rel="noopener noreferrer"
					key={`${logo.alt}-${i}`}
				>
					<img src={`${process.env.PUBLIC_URL}/img/${logo.src}`} alt={logo.alt} />
				</a>
			))}
		</div>
	</div>
);

const Skills = () => {
	return (
		<section id="skills">
			<div className="content">
				<h1>I understand and speak these languages.</h1>
				<div className="logo-marquee">
					<MarqueeRow logos={row1} />
					<MarqueeRow logos={row2} reverse />
				</div>
			</div>
		</section>
	);
};

export default Skills;
