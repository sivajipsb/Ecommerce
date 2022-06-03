




import React from 'react'

import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { deletecart } from '../redux/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export const Checkout = () => {
  
  const navigate = useNavigate()

  const [ formData , setFormData] = React.useState({
      name : "",
      phonenumber : "",
      city :"",
      state:""
  })


  const HandleChange = (e) => {

      const {id,value} = e.target;
      setFormData({...formData , [id] : value})
  }

  const HandleSubmit = () => {

      console.log(formData)
      if(formData.name === "" || formData.phonenumber.length === 0  || formData.city.length == 0  ){
        alert("Please Fill all the Details!")
      }

      else if(formData.name !== "" && formData.phonenumber.length >= 10  && formData.city.length >0  ){
          navigate("/payment")
      }
      else if(formData.phonenumber.length <= 10 && formData.name !== ""  && formData.city.length >0 ){
           alert("Please check Phone Number & number should be  10 numbers")
      }
      else if(formData.city.length ==0 && formData.name !== "" && formData.cardNo.length !== 0){
        alert("Please check CVV ")
   }
  }

return (
  <>
  <div className="paymentBox">
  <h1 id="mypay">Enter your address  Details</h1>
  <Box
    sx={{
      alignItems: 'center',
      '& > :not(style)': { m: 1 },
    }}
  >
    <TextField className="inputIs" onChange={HandleChange}
      id="name"
      label="Name"
      style={{width:"430px"}}
    /> 
<br></br>
   <TextField className="inputIs" onChange={HandleChange}
      id="phonenumber"
      label="phonenumber"
      style={{width:"430px"}}
    /> 
<br></br>
    
{/* <br></br> */}
    <TextField className="inputIs" onChange={HandleChange}
      id="city"
      label="city"
      style={{width:"430px"}}
    /> 
  <br></br>

  <TextField className="inputIs" onChange={HandleChange}
      id="state"
      label="state"
      style={{width:"430px"}}
      // placeholder="none"
      // type="date"
    /> 
   {/* ---------------------- Button --------------------------------------- */}

<br></br>
  <Stack direction="row" spacing={20}>
    <Button  style={{marginLeft:"630px"}} onClick={HandleSubmit} id='paymentBtn' variant="contained">SUBMIT</Button>
  </Stack>

  </Box>
  </div>
  </>
);
}
