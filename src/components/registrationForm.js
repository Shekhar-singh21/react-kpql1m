import React,{useState} from 'react';
import './registrationForm.css'


export default function RegistrationForm(){
  const[name,setName]= useState('')
  const[password,setpassword]= useState('')
  const[email,setEmail]= useState('')
  const[selected,setSelected]= useState(null)

  function checkGender(e){
    setSelected(e.target.value)
  }

  function getName(e){
    setName(e.target.value)
  }
  function getEmail(e){
    setEmail(e.target.value)

  }
  function getpassword(e){
    setpassword(e.target.value)
  }

  function getAllData(e){
    e.preventDefault();

    let nameRegex = /^[a-zA-Z- ]/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/g;

    if(!nameRegex.test(name)){
      alert('please Enter a Valid Name!')
    }else if(!emailRegex.test(email)){
      alert('please Enter a valid Email!')

    }else if(!passwordRegex.test(password)){
      alert('please enter a valid password')
    }else{
      alert('Thanks for registering')
      
    }

  }

  return(

    <>
    <form className= 'form'  onSubmit= {getAllData} >
      <h1 className="heading">Register here!</h1>
      <div className='inputs'>
      <input type="name" value={name} onChange={getName} placeHolder = 'Name' className='inputBox'/>
      <input type="email"  value={email} onChange={getEmail} placeHolder = 'Email' className='inputBox'/>
      <input type="password"  value={password} onChange={getpassword} placeHolder = 'Password' className='inputBox'/>
      </div>
      <div className='check'>
        <p>Male</p>
        <input type="radio" checked = {selected === 'Male'} value="Male" onChange={checkGender}/>
        <p>Female</p>
        <input type="radio" checked = {selected === 'Female'} value="Female" onChange={checkGender}/>
      </div>
      <div className="check">
        <p>Already Registered?</p>
        <p className="login"> Login</p>
      </div>
      <input type="Submit" value= "Register" className='sumbit'/>
    </form>
    
    
    </>
  )
}