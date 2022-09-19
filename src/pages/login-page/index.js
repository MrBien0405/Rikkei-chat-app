import "./style.css";
import img from "./logo.jpg";
// const app = document.getElementById("app");

export let loginPage = /*html */ `
<div class="khungngoai">
<div class="box-img"><img src="${img}" alt=""></div>
<h2>Sign in to BT Chat</h2>
<div id="server-error-message" class="error"></div>
<div id="server-success-message" class="success"></div> 
<div class="khungtrong">
    <form action="" id="login-form">
        <p>Email address</p>
        <input type="text" name="email" class="input" id="" placeholder="Please enter your email">
        <div id="email-error-message"></div>
        <p>Password</p>
        <input name="password" type="password" id="" class="input" placeholder="Please enter your password">
        <div id="password-error-message"></div>
        <div><button class="btn">Login</button></div>
    </form>
  
    
</div>
<form class="khungtrong-1">
    <button id="btn-3" class="btn-3">New to Rikkei Chat? Create an account</button>
</form>
<p class="text">For your password? <a href="">Clink here</a></p>
</div>

`;
