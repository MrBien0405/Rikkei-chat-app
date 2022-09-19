import { loginPage } from "../pages/login-page/index";
import { registerPage } from "../pages/register-page/index";
import { abc } from "../pages/reset-password-page/index";
import { chatPage } from "../pages/chat-page/index";
import { validateLoginInfo } from "../controller/index";
import { validateRegisterInfo } from "../controller/index";
import { ValidateResetPassword } from "../controller/index";


export let setActiveScreen = (screenName) => {
  //   let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = loginForm.email.value;
          const password = loginForm.password.value;

          console.log(email);
          console.log(password);
          validateLoginInfo(email, password);
          
     

      



          // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó

          //Làm giống hệt các bước trên
        });
      }
      break;

    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }

      const registerForm = document.getElementById("register-form");
      if (registerForm) {
        // console.log(registerForm);
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstName = registerForm.firstName.value;
          const lastName = registerForm.lastName.value;
          const email = registerForm.email.value;
          const password = registerForm.password.value;
          const confirmPassWord = registerForm.confirmPassword.value;

          console.log(firstName);
          console.log(lastName);
          console.log(email);
          console.log(password);
          console.log(confirmPassWord);

          validateRegisterInfo(
            firstName,
            lastName,
            email,
            password,
            confirmPassWord
          );
        });
      }


      



      break;

    case "abc":
      if (app) {
        app.innerHTML = abc;
      }

      const resetPassword = document.getElementById("resetPassword-form");
      if (resetPassword) {
        console.log(resetPassword);
        resetPassword.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = resetPassword.email.value;

          console.log(email);
          ValidateResetPassword(email);
        });
      }

      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;

    default:
      break;
  }
};

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};

export let renderSuccessMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};



