import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'

function App() {


  return (
    <div className="app">
      <Navbar />

      <header className="hero">
        
          <Home/>
        <p>Découvrez nos derniers articles et actualités</p>
      </header>
    </div>
  )
}

export default App
