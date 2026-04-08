import Header from '@components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import About from './components/About'
import Features from './components/Features'

function App() {

  return (
    <>
      <Header />
      <main className="w-full flex items-center justify-center flex-col mb-4">
        <Banner />
        <Features />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
