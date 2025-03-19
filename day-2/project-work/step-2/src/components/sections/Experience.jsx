import { Briefcase } from 'lucide-react';
import Section from '../ui/Section';

const experiences = [
	'Sviluppo frontend con Vue.js e React per progetti e-commerce',
	'Implementazione API RESTful con Node.js e Express',
	'Gestione database MongoDB e PostgreSQL',
	'Ottimizzazione performance con miglioramento del Core Web Vitals',
];
export default function Experience() {
	return (
		<Section title="Esperienza Lavorativa" icon={Briefcase}>
			<article className="space-y-2">
				<h3 className="text-xl text-blue-600 font-medium">Web Developer</h3>
				<p className="text-gray-600">Digital Solutions srl | Marzo 2018 - Presente</p>
				<ul className="space-y-2">
					{experiences.map((item, index) => (
						<li
							key={index}
							className="relative pl-5 text-gray-700 hover:translate-x-1 transition-transform"
						>
							<span className="absolute left-0 text-blue-600">▹</span>
							{item}
						</li>
					))}
				</ul>
			</article>
		</Section>
	);
}
