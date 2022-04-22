import React from 'react';

import { auth } from './App'


export default function ChatMessage(props) {

  const {text, uid, photoURL} = props.message;

  // console.log({text})

  const messageClass = uid ===  auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='userPhoto' />
      <p>
        {text}
      </p>

    </div>
  )
}
