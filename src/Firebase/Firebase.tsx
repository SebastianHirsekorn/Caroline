import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"


import { getDatabase, ref } from "firebase/database";

const app = initializeApp({
    apiKey: "AIzaSyApLE4xQQHhsRvYbX-sIdtqJkHyzCmfBx0",
    authDomain: "caroline-a4788.firebaseapp.com",
    databaseURL: "https://caroline-a4788-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "caroline-a4788",
    storageBucket: "caroline-a4788.appspot.com",
    messagingSenderId: "256633487028",
    appId: "1:256633487028:web:71aa8397902563f08561e1",
    measurementId: "G-V26C5WM03K"
  })

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
const provider = new GoogleAuthProvider();

let currUser:any = null;

export function SignIn() {
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential: any = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
  
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  
    return (
      <div className="container">
        <Button variant="outlined" size="large" startIcon={<LoginIcon></LoginIcon>} onClick={signInWithGoogle} className="SignInButton">Sign in</Button>
      </div>
    )
  }

export function LogOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}


export const database = getDatabase(app);
export const DBRef = ref(database, 'events/');
