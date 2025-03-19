import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {children}
      </main>
      <Footer />
    </div>
  )
} 