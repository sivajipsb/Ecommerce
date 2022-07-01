

import { useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"
import axios from "axios"
// import { Link, useNavigate } from "react-router-dom";


export const  Checkout = () => {

  const navigate = useNavigate()

const handleSubmit=(e)=>{
  e.preventDefault();
      
      // axios.post("http://localhost:5050/details",{email:"",address:""}).then(() => {
        // alert("Successfully Registered")
        // navigate("/Login
     navigate("/payment")
      // })
 
}


    
    const sivaji=useSelector((store)=>store.cart.sivaji)
    var total = 0;
    const itemList=(item)=>{
      let a = item.price
        total=total+(+a)*item.quantity;    
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h5 className="my-0">{item.title}</h5>
            </div>
            <span className="text-muted">₹ {a} <b>({item.quantity})</b></span>
          </li>
        )
    }

    const dispatch=useDispatch()
    useEffect(()=>{
        // dispatch(api_id(id))
        dispatch(Getcart_api())
              
          
      },[])
  return (
    <>
      <div className="container  my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Order Summery</span>
              <span className="badge bg-primary rounded-pill">{sivaji.length}</span>
            </h4>
            <ul className="list-group mb-3">
           {sivaji.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (INR)</span>
                <strong>Rs {total}</strong>
              </li>
            </ul>

           
          </div>
          <div className="col-md-7 col-lg-8">
            <div><h4 className="mb-3 ">Billing address</h4></div>
            <form className="needs-validation" onSubmit={handleSubmit} >
              <div className="row g-3">
              

           

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required  placeholder="1234 Main St"
                   
                   
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite" 
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country"  required>
                    <option value="">Choose...</option>
                    <option> India </option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state"  required>
                    <option value="">Choose...</option>
                    <option>Andhra pradesh</option>
                    <option>Telangana</option>
                    <option>Karnataka</option>
                    <option>Tamilnadu</option>
                    <option>Delhi</option>
                    <option>Other</option>

                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="my-4" />
              
               <input  className="w-100 btn btn-outline-primary btn-lg" type="submit" value="submit" onSubmit={handleSubmit} />
              
            </form>
          </div> 
        </div>
        
      </div>
      
    </>
  );
};


