import {Navbar} from "./components/navbar"
import { Product } from "./components/product"
import {Product_id} from "./components/productid"
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Goto_cart } from "./components/goto_cart"
import { Payment } from "./components/payment"
import {Card} from "./components/Card"
import { Thank } from "./components/Thank"
import {Checkout} from "./components/checkout"
import {SignUp} from "./components/signup"
import {Login} from "./components/login"
function App() {
 

  return (
    <div className="App">
   {/* <Navbar/>  */}
      <Routes>
        <Route path="/" element={<Product/>}></Route>
        <Route path="/product/:id" element={<Product_id/>}></Route>
        <Route path="/gotocart" element={<Goto_cart/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
        <Route path="/thank" element={<Thank/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp/>} />
        
      </Routes>
     
      {/* <Product/> */}
    </div>
  )
}

export default App
