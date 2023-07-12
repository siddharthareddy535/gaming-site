import React, { Component} from 'react'
import { useState } from 'react';
 import "./register.css";
import sr from"./assets/srgame.jpg";
const Register = ()=>{
   
  const [first,setFisrt] =useState("");
  const [last,setLast]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  




    function myfun(){
    var l1=document.getElementById('checkpassword').value;
    var l2=document.getElementById('checkpassword1').value;
    console.log(l1);
   if(l1==="" && l2===""){
    alert("pls enter password");
   }
    else if(l1!=l2){
        alert("password is not matching pls trying again");
    }
    else{
        alert("register sucessfully done");
    }
    }
    function show(){
        var l=document.getElementById('checkpassword1');
        var x=document.getElementById('s3');
        x.addEventListener('click',()=>{
            if(l.type==="password"){
              l.type="text";
            }
            else{
                l.type="password";
            }       
        })
      
    }
    return(
        <div className='regi'>
        <div className="s1">
            <meta name="viewport" content="width=device-width,intial-scale=1.0"></meta>
            <h1>SR GAMING</h1>
           <div className="create">
           
            <div className="good">
            <form >
            <div className="imgcontainer">
             <img src={sr} alt="Avatar" className="avatar"></img>
          </div>
              <label htmlFor="fname">First Name: </label> 
              <input type="text" name="fname" id="f1" required
              value={first}
              onChange={(e)=>handleinputchange(e,'first')}
              ></input>
              <br></br>
              <label htmlFor="lname">Last Name: </label>
              <input type="text" name="lname"  id="l1" required
               value={last}
               onChange={(e)=>handleinputchange(e,'last')}></input>
              <br></br>
              <label htmlFor="email">Username: </label>
              <input type="email" name="email" id="e1" required
               value={email}
               onChange={(e)=>handleinputchange(e,'email')}></input>
              <br></br>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="checkpassword" required
               value={password}
               onChange={(e)=>handleinputchange(e,'password')}></input>   <br></br>
             <label htmlFor="cpassword"type="cpassword">Conform Password: </label>
             <input type="password" name="cpassword" id="checkpassword1"></input>
             <button type="button" id='s3' onClick={show}>Show Password</button>
             <br></br>
             <button type='button' onClick={myfun}>Register</button>
            </form>
            </div>
           </div>
           </div>
        </div>
       
    ) ;
}
export default Register