import './App.css'
import Header from '@components/Header'

function App() {

  return (
    <>
      <Header />
      <section id='sec-1' className='h-screen bg-blue'>
        <div>Seção 1</div>
      </section>
      <section id='sec-2' className='h-screen bg-red'>
        <div>Seção 2</div>  
      </section>
      <section id='sec-3' className='h-screen bg-green'>
        <div>Seção 3</div>
      </section>
    </>
  )
}

export default App
