export default function Section({ title, icon: Icon, children }) {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 transition-all hover:translate-y-[-5px] hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        {Icon && <Icon className="text-blue-600" />}
        {title}
      </h2>
      {children}
    </section>
  )
} 