import React from 'react'

import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export const Card = () => {
  
  const navigate = useNavigate()

  const [ formData , setFormData] = React.useState({
      name : "",
      cardNo : "",
      expiry :"",
      cvv : ""
  })


  const HandleChange = (e) => {

      const {id,value} = e.target;
      setFormData({...formData , [id] : value})
  }

  const HandleSubmit = () => {

      console.log(formData)
      if(formData.name === "" || formData.cardNo.length === 0  || formData.cvv.length == 0  ){
        alert("Please Fill all the Details!")
      }

      else if(formData.name !== "" && formData.cardNo.length >= 10  && formData.cvv.length == 3  ){
          navigate("/thank")
      }
      else if(formData.cardNo.length <= 10 && formData.name !== ""  && formData.cvv.length == 3){
           alert("Please check Card Number & number should be more than 10 numbers")
      }
      else if(formData.cvv.length !== 3 && formData.name !== "" && formData.cardNo.length !== 0){
        alert("Please check CVV and it should be 3 digits")
   }
  }

return (
  <>
  <div className="paymentBox">
  <h1 id="mypay">YOUR CARD DETAILS</h1>
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
      id="cardNo"
      label="Card Number"
      style={{width:"430px"}}
    /> 
<br></br>
    <TextField className="inputIs" onChange={HandleChange}
      id="expiry"
    
      style={{width:"430px"}}
      placeholder="none"
      type="date"
    /> 
<br></br>
    <TextField className="inputIs" onChange={HandleChange}
      id="cvv"
      label="CVV"
      style={{width:"430px"}}
    /> 
  <br></br>
   

<br></br>
  <Stack direction="row" spacing={20}>
    <Button  style={{marginLeft:"630px"}}  color="success" onClick={HandleSubmit} id='paymentBtn' variant="contained">SUBMIT</Button>
  </Stack>

  </Box>
  </div>
  </>
);
}