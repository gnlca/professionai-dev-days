export default function Input({ label, id, type = 'text', ...props }) {
	return (
		<div className="space-y-2">
			<label htmlFor={id} className="block font-medium text-gray-700">
				{label}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				className={
					'w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
				}
				{...props}
			/>
		</div>
	);
}
