import { Console } from './components/Console'
import { CtaBand } from './components/CtaBand'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Quickstart } from './components/Quickstart'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Gallery />
      <Console />
      <Quickstart />
      <CtaBand />
      <Footer />
    </>
  )
}
