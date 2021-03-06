import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import { useDispatch } from 'react-redux';


export const Login = ({setLog}) => {
  const {id} =useParams();
  const navigate = useNavigate();
  const [state,setState] = useState(false);
  const [hidden,setHidden] = useState("");
  const [data,setData] = useState({
    email:"",
    password:""
  });

  function handleChange(e){
    setState(false)
    const {name} = e.target;
    setData({
      ...data,
      [name]:e.target.value
    })
  }

  function handleSubmit(){
    if(data.email && data.password){
      axios.post("https://sheltered-springs-86254.herokuapp.com/auth/Login",data).then(({data}) => {
        setState(true);
        setHidden(data)
        localStorage.setItem("app", JSON.stringify(data));
        setLog(true)
        alert("Successfully Loged-In")
        // navigate(`/product/:${id}`)
        navigate("/products")

      })
    }
    else{
      setHidden("please fill all the details")
      setState(true)
    }
  }

  return (
    <div style={{margin:"auto",textAlign:"center"}}>
      <br />
      <h1>Login</h1>
      <TextField name="email" onChange={handleChange} style={{width:"30%",margin:"25px 0"}} id="demo-helper-text-misaligned-no-helper" label="Email" placeholder='Enter Email' />
      <br />
      <TextField name="password" onChange={handleChange} type="password"  style={{width:"30%"}} id="demo-helper-text-misaligned-no-helper" label="Password" placeholder='Enter Password' />
      <br />
      {state ? <p style={{color:"red"}}>{hidden}</p> : null}
      <br />
      <Button onClick={handleSubmit} style={{width:"30%",height:"50px"}} variant="contained">LOGIN</Button>
      <br />
      
     
    </div>
  )
}

