import { GraduationCap } from 'lucide-react'
import Section from '../ui/Section'

export default function Education() {
  return (
    <Section title="Istruzione" icon={GraduationCap}>
      <article className="space-y-2">
        <h3 className="text-xl text-blue-600 font-medium">Laurea in Informatica</h3>
        <p className="text-gray-600">Università di Milano | 2015 - 2018</p>
        <p className="text-gray-700">
          Tesi: "Implementazione di architetture microservices con Docker e Kubernetes"
        </p>
      </article>
    </Section>
  )
} 