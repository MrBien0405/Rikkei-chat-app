import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { renderErrorMessage, setActiveScreen } from "../view/index";

export let createNewUser = (firstName, lastName, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      // hiện thị ra là đăng kí thành công
      renderErrorMessage("successMessage", sucessMessage);
      setActiveScreen("loginPage");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-error-message", errorMessage);
    });
};

export let signIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // console.log(userCredential);
      const user = userCredential.user;
      renderErrorMessage("successMessage", "thành công");
      setActiveScreen("chatPage");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-error-message", errorMessage);
    });
};
