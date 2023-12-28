import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home'
import CustomerCare from './Pages/CustomerCare'
import Login from './Pages/Login'
import Register from './Pages/SignUp'
import Offers from './Pages/Offers'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Admin from './Pages/Admin'
import AddProduct from './Pages/AddProduct'
import Product from './Pages/Product'
import ReviewCard from './components/ReviewCard'
import Checkout from './Pages/Checkout'
import Success from './Pages/Success'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<CustomerCare />} />
        {
          
          <Route path="/login" element={<Login />} />
        }
        {
          
          <Route path="/register" element={<Register />} />
        }
        <Route path="/offer" element={<Offers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:id" element={<Product/>} />
        
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/reviewcard" element={<ReviewCard />} />
        <Route path="/success/:Urlname/:email/:Urladdress/:Urlmethod/:orderNum" element={<Success />} />
        

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
