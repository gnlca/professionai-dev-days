import Image from 'next/image';
import { useState } from 'react';

export default function ProfileImage() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative w-36 h-36 mx-auto"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Image
				src={isHovered ? '/profile-smile.jpeg' : '/profile.jpg'}
				alt="Mario Rossi"
				fill
				className="rounded-full object-cover border-3 border-white shadow-md transition-opacity duration-300"
			/>
		</div>
	);
}
