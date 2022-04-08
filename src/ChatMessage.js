import React from 'react';
// import React, { useRef, useState } from 'react';

// import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
// import { collection } from 'firebase/firestore';
// import 'firebase/compat/auth';  
// import 'firebase/compat/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function ChatMessage(props) {

  const { text, uid } = props.message;
  const { key } = props.message;

  return (
    <p>
      {text}
      {key}
    </p>
  )
}
