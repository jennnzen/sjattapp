import React from 'react';
import SignIn from './SignIn'
import ChatRoom from './ChatRoom'
import firebase from 'firebase/compat/app'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';
// import { initializeApp } from 'firebase/app'; 
// import { getAnalytics } from "firebase/analytics";
// const firebase = initializeApp();

const auth = getAuth();
const firestore = getFirestore();

const firebaseConfig = {
  apiKey: "AIzaSyAcaOg7oEY5ZRGBg-Mz8-lR2SNrdWL7Y5c",
  authDomain: "sjattapp.firebaseapp.com",
  projectId: "sjattapp",
  storageBucket: "sjattapp.appspot.com",
  messagingSenderId: "88197017781",
  appId: "1:88197017781:web:af44c40944bb23c5290efc",
  measurementId: "G-TM0WZG3KH0"
};

firebase.initializeApp({
  firebaseConfig
})



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header>

        
      </header>

      <section>
        { user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  )
}

export default App;
