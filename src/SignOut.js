import React from 'react';
// import React, { useRef, useState } from 'react';

// import firebase from 'firebase/compat/app'; 
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';  
// import 'firebase/compat/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth} from "./App";

export default function SignOut() {
  return auth.currentUser && (
      <button onClick={() => auth.signOut()}>
          Sign Out
      </button>
  )
}
