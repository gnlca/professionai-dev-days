import Layout from '../components/layout/Layout'
import Summary from '../components/sections/Summary'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'

export default function Home() {
  return (
    <Layout>
      <Summary />
      <Experience />
      <Education />
      <Skills />

    </Layout>
  )
}
