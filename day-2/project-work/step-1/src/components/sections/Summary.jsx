import { User } from 'lucide-react'
import Section from '../ui/Section'

export default function Summary() {
  return (
    <Section title="Riepilogo" icon={User}>
      <p className="text-gray-700">
        Sviluppatore web full-stack con esperienza nella creazione di applicazioni web scalabili e
        responsive. Specializzato in JavaScript/TypeScript e framework moderni come React e Node.js.
        Appassionato di UI/UX e performance optimization.
      </p>
    </Section>
  )
} 