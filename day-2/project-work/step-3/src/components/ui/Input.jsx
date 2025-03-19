const inputClasses =
	'w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

export default function Input({ label, id, type = 'text', ...props }) {
	const isTextarea = type === 'textarea';
	const Component = isTextarea ? 'textarea' : 'input';

	return (
		<div className="space-y-2">
			<label htmlFor={id} className="block font-medium text-gray-700">
				{label}
			</label>
			<Component
				type={isTextarea ? undefined : type}
				id={id}
				name={id}
				className={inputClasses}
				{...props}
			/>
		</div>
	);
}
