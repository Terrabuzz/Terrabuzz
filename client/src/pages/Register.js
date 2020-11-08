import React from 'react'
import '../style/Register/Register.css'
import Logo from '../assets/img/icon/Logo.svg';

const Register = (props) => {
    return (

        <div className="page-grid-reg">
            <div className="form-container-reg inner-half-grid-1-reg">
                <div>
                    <img className="logo-reg" src={Logo} alt="" />
                </div>
                <div>
                    <h1 className="heading-1-reg">
                        Registration
                    </h1>
                    <h2 className="heading-2-reg">
                        Fill out the the form below to get started.
                    </h2>

                    <form className="form-reg">
                        <input className="current" type="text" name="email" placeholder="johndoe@gmail.com"></input>
                        <input type="password" name="password" placeholder="********"></input>
                        <input type="password" name="confirm-password" placeholder="********"></input>
                        <input type="text" name="username" placeholder="John Doe"></input>
                        <input type="text" name="user-handler" placeholder="@johndoe"></input>
                        <a href="/forget-password"> Already have an account?</a>

                        <br />

                        <input type="checkbox" name="remember-me" value="remember-me" />
                        <label> By signing up, you agree to Terrabuzz's
                            <br /> 
                            <label className="bold" > Terms, Conditions And Private Policies</label>
                        </label>

                        <br />
                        <input className="register-button" type="button" value="Register" />
                    </form>

                </div>

            </div>


            <div className="content-container-reg">
                <div className="inner-half-grid-2-reg">
                    <div>
                        <a href="/Contact Us">  Contact </a>
                        <a href="/About"> About Us </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
