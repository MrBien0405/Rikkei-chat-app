import {renderErrorMessage} from "../view/index"
import {createNewUser, signIn} from "../model/index"
import { setActiveScreen } from "../view/index";
export let validateLoginInfo = (email, password) =>{
// regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
  if(email && password){
    signIn(email, password)
  }
}




export let validateRegisterInfo = (firstName, lastName, email, password, confirmPassword) =>{
  // regex, regular expression
    // email regex
    const emailRegex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      
      if (!firstName) {
        renderErrorMessage("firstName-error-message", "Please enter your firstName");
      } else {
        renderErrorMessage("firstName-error-message", "");
      }

      if (!lastName) {
        renderErrorMessage("lastName-error-message", "Please enter your lastName");
      } else {
        renderErrorMessage("lastName-error-message", "");
      }

      if (!email) {
      renderErrorMessage("email-error-message", "Please enter your email");
    } else if (!emailRegex.test(email)) {
      renderErrorMessage("email-error-message", "Invalid email");
    } else {
      renderErrorMessage("email-error-message", "");
    }
  
    if (!password) {
      renderErrorMessage("password-error-message", "Please enter your password");
    } else {
      renderErrorMessage("password-error-message", "");
    }

    if (!confirmPassword) {
      renderErrorMessage("confirmPassword-error-message", "Please enter your confirmPassword");
    } else {
      renderErrorMessage("confirmPassword-error-message", "");
    }

    if (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      confirmPassword === password 
    ){
      createNewUser(firstName, lastName, email, password)
    }
  }

 



  export let ValidateResetPassword = (email) =>{
    // regex, regular expression
      // email regex
      const emailRegex =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     
        if (!email) {
          renderErrorMessage("email-error-message", "Please enter your email");
        } else if (!emailRegex.test(email)) {
          renderErrorMessage("email-error-message", "Invalid email");
        } else {
          renderErrorMessage("email-error-message", "");
        }
    
    }

    
    