import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HomeScreen from './Screen/Home/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import Products from './Screen/Products/Products'
import Footer from './Component/Footer/Footer'
import Cart from './Screen/Cart/Cart'


function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
