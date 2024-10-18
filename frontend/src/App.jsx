import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Shop from "./Pages/shop"
import Footer from "./Components/Footer/Footer"
import skill_banner from "./Components/Assets/skill-banner11.avif"
import knowledge_banner from "./Components/Assets/skill-banner.jpg"
import creative_banner from "./Components/Assets/skill-banner3.jpg"

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} > </Route>
          <Route path="/skill" element={<ShopCategory banner={skill_banner} category="skill" />} > </Route>
          <Route path="/knowledge" element={<ShopCategory banner={knowledge_banner} category="knowledge" />} > </Route>
          <Route path="/creative" element={<ShopCategory banner={creative_banner} category="creative" />} > </Route>
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} ></Route>
          </Route>

          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/login" element={<LoginSignup />} ></Route>

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
