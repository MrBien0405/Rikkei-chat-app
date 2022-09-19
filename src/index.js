// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfPCJvXGWs63xbN82n8_9RLDGBEcsO9m0",
  authDomain: "chat-app-56d4f.firebaseapp.com",
  projectId: "chat-app-56d4f",
  storageBucket: "chat-app-56d4f.appspot.com",
  messagingSenderId: "621381406274",
  appId: "1:621381406274:web:7cc8a9f2a69eb899cb27db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
setActiveScreen("loginPage");
// setActiveScreen("registerPage");
// setActiveScreen("abc");
// setActiveScreen("chatPage")
