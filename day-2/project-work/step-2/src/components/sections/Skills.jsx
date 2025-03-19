import { Code2 } from 'lucide-react'
import Section from '../ui/Section'

const skills = [
  'JavaScript/TypeScript',
  'React/Vue.js',
  'Node.js/Express',
  'HTML5/CSS3/SASS',
  'Git/GitHub',
  'MongoDB/PostgreSQL',
  'Docker/Kubernetes',
  'AWS/Netlify',
]

export default function Skills() {
  return (
    <Section title="Competenze" icon={Code2}>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="relative pl-5 text-gray-700 hover:translate-x-1 transition-transform">
            <span className="absolute left-0 text-blue-600">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
} 