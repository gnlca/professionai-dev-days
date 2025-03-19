import Image from 'next/image';

export default function ProfileImage() {
	return (
		<div className="relative w-36 h-36 mx-auto">
			<Image
				src={'/profile.jpg'}
				alt="Mario Rossi"
				fill
				className="rounded-full object-cover border-3 border-white shadow-md transition-opacity duration-300"
			/>
		</div>
	);
}
