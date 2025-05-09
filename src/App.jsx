import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HomeScreen from './Screen/Home/HomeScreen'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <HomeScreen />
      </div>
    </>
  )
}

export default App
