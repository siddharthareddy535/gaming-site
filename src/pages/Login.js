import React from 'react';
 import './login.css';
import ved from './assets/vedio.mp4';
import sr from"./assets/srgame.jpg";
import {Link} from "react-router-dom";
const Login =()=>{
    return(
        <div className='logic'>
        <div className="background">
         <video  autoPlay muted id="ved">
          <source  src={ved} type="video/mp4"></source>
        </video>
        <div className="head">
            <h1>Sr Gaming</h1>
        </div>
       
        <img src={sr} className="logo"></img>
      
        <div className="loginform">
        <div className="form-box">
            <div className="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required/>
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="forget">
                        <label htmlFor=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>
                      
                    </div>
                    <button>Log in</button>
                    <div className="register">
                        <p>Don't have a account ?<a href="#">
                            <Link to="/register">
                                Register
                            </Link></a></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
      </div>
        </div>
    );
}
export default Login;
