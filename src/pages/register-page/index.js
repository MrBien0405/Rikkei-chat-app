import "./style.css"
import img from "./logo.jpg"
export let registerPage = /*html */`
<div class="container-1" id="register-page">
        <div class="box-img-1"><img src="${img}" alt=""></div>
        <h2>Create new account</h2>
        <div id="server-error-message" class="error"></div>
        <div id="server-success-message" class="success"></div> 

        <div class="wrapperParrent-1">
            <form action="" id="register-form">
                <p>First Name</p>
                <input type="text" name="firstName" class="input-1"  placeholder="Please enter your first name">
                <div id="firstName-error-message"></div>
                <p>Last Name</p>
                <input type="text" name="lastName"  class="input-1" placeholder="Please enter your last name">
                <div id="lastName-error-message"></div>

                <p>Email address</p>
                <input type="text" name="email" class="input-1" placeholder="Please enter your email">
                <div id="email-error-message"></div>

                <p>Password</p>
                <input type="password" name="password" class="input-1" placeholder="Please enter your password">
                <div id="password-error-message"></div>

                <p>Confirm Password</p>
                <input type="password" name="confirmPassword"  class="input-1" placeholder="Confirm your password">
                <div id="confirmPassword-error-message"></div>

                <div><button id="btn-1" class="btn-1">Register</button></div>
            </form>
            
        </div>
        <div class="wrapperParrent-1-1">
            <button class="btn-1-1">Already have an account? Login here</button>
        </div>
    
    </div>


`