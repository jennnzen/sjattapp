import React from 'react';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';


import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';
import shortComand from './shortComand';


const firebaseConfig = {
  apiKey: "AIzaSyAcaOg7oEY5ZRGBg-Mz8-lR2SNrdWL7Y5c",
  authDomain: "sjattapp.firebaseapp.com",
  projectId: "sjattapp",
  storageBucket: "sjattapp.appspot.com",
  messagingSenderId: "88197017781",
  appId: "1:88197017781:web:af44c40944bb23c5290efc",
  measurementId: "G-TM0WZG3KH0"
};

firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header>
        <SignOut />
      </header>

      <div>
        <shortComand />
      </div>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  )
}

export default App;