import Experience from '@/components/Experience'
import Navbar from '@/components/Navbar'
import Tech from '@/components/Tech'
import About from '@/components/About'
import Start from '@/components/Start'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between text-text">
        <Start/>
        <About/>
        <Tech/>
        <Experience/>
        <Portfolio/>
      </main>
      <Contact/>
    </>
  )
}
