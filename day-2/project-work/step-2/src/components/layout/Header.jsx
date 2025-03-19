import { Mail, Phone, MapPin } from 'lucide-react';
import ProfileImage from '../ui/ProfileImage';

export default function Header() {
	return (
		<header className="bg-blue-600 text-white py-8 text-center mb-12">
			<div className="space-y-4">
				<ProfileImage />
				<h1 className="text-4xl font-bold m-0">Mario Rossi</h1>
				<p className="text-xl text-gray-100">Full Stack Developer</p>

				<div className="flex flex-wrap justify-center gap-4" id="contact-info">
					<a href="mailto:mario.rossi@email.com" className="hover:underline">
						<p className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-xl">
							<Mail size={18} /> mario.rossi@email.com
						</p>
					</a>
					<p className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-xl">
						<Phone size={18} /> +39 123 456 7890
					</p>
					<p className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-xl">
						<MapPin size={18} /> Milano, Italia
					</p>
				</div>
			</div>
		</header>
	);
}
