import React from 'react';
// import React, { useRef, useState } from 'react';

// import firebase from 'firebase/compat/app'; 
// import 'firebase/compat/firestore';
import { collection } from 'firebase/firestore';
import 'firebase/compat/auth';  
import 'firebase/compat/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

export default function ChatRoom() {

    const messagesRef = collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

  return (
      <>
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>

        <div>

        </div>
      
      </>
  )
}