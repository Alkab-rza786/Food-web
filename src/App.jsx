import Navbar from "./Components/Pages/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import PlaceOrder from "./Components/Pages/PlaceOrder/PlaceOrder"
import Cart from "./Components/Pages/Cart/Cart"
import Footer from "./Components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./Components/LoginPopup/LoginPopup"

function App() {

  const [showlogin, setShowLogin] = useState(false);

  return (
    <>
      {
        showlogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>
      }
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />

        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
