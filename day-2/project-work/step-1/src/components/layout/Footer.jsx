import { Github, Linkedin, Twitter, Printer, } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-center py-8 mt-8 border-t border-gray-200">
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://github.com/mario-rossi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/mario-rossi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://twitter.com/mariorossi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
        >
          <Twitter size={24} />
        </a>
      </div>
      <div>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Printer size={18} /> Stampa CV
        </button>
      </div>
    </footer>
  )
} 