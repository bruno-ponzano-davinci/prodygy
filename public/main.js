import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyAbT6czBROqhkOz3YBiWZ-MOzYfv0ZK6bs",
  authDomain: "prodauth1.firebaseapp.com",
  projectId: "prodauth1",
  storageBucket: "prodauth1.appspot.com",
  messagingSenderId: "997151342472",
  appId: "1:997151342472:web:be0de4969919f91fb3043d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const googleLogin = document.getElementById("google-login-btnn");
googleLogin.addEventListener("click", function() {
  const provider = new GoogleAuthProvider(); 

  signInWithPopup(auth, provider)
    .then((result) => {
   
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
    
      const user = result.user;
      window.location.href="../logged.html";
    
    }).catch((error) => {
     
      const errorCode = error.code;
      const errorMessage = error.message;
   
      const email = error.customData.email;
      
      const credential = GoogleAuthProvider.credentialFromError(error);
     
    });
});
