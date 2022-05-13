import React from 'react';

import { auth } from './App'


export default function ChatMessage(props) {

  const {text, uid, photoURL, altDescription} = props.message;

  if (auth.currentUser.uid != null) {
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    const photoType = text === "space" ? 'spacePhoto' : 'profilePhoto';

    return (
      <div className={`message ${messageClass}`}>
        <img className={`${photoType}`} src={photoURL} alt={altDescription} />
        <p className={`${text}`}>
          {text}
        </p>
      </div>
    )
  } else {
    return (null)
  }
}
