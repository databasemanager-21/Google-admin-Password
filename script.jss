import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.register = function(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  createUserWithEmailAndPassword(auth,email,password)

  .then(() => {

    alert("Account Created");

  })

  .catch((error) => {

    alert(error.message);

  });

}

window.login = function(){

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  signInWithEmailAndPassword(auth,email,password)

  .then(() => {

    alert("Login Success");

  })

  .catch((error) => {

    alert(error.message);

  });

}
