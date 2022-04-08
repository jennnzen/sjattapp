import React from 'react';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
// import React, { useRef, useState } from 'react';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  
import 'firebase/compat/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import ChatMessage from './ChatMessage';
import {auth} from "./App";

export default function SignIn() {

  const signInWithGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  )
}
