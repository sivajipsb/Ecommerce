import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import "./check.css"
import { useForm } from 'react-hook-form';

export const Checkout = () => {
    const state = useSelector((store)=>store.cart)
    // useSelector((store)=>store.cart)
    var total = 0;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <>
     checkout
     <div id="main">
         <div>
         <form onSubmit={handleSubmit(onSubmit)}>
    <label>Firstname</label>
      <input {...register('firstName')} />
      <br></br>
      <input {...register('lastName', { required: true })} />
      <br></br>
      {errors.lastName && <p>Last name is required.</p>}
      <br></br>
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
         </div>
         <div></div>
     </div>

   
      
    </>
  );
};

// export default Checkout;
