import React, { useRef, useState} from 'react';
import axios from "axios";

import firebase from 'firebase/compat/app'; 
import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatMessage from './ChatMessage';
// import ShortComand from './ShortComand';
import { auth, firestore } from "./App";


export default function ChatRoom() {

    const dummy = useRef()

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const [clientId, setClientId] = useState(
        'rmUwjdhpp6pKzYbJrlPKC43D9PfM_v6CLWCnNKDiF6M'
    );

    const [result, setResult] = useState([]);
    
    async function shortComand(formValue) {
        
        const page = Math.floor(Math.random() * 10);
        const photoIndex = Math.floor(Math.random() * 10);
    
        const url = 'https://api.unsplash.com/search/photos?page='+page+'&query='+formValue+'&client_id='+clientId;
    
        let response = await axios.get(url);

        
        setResult(response.data.results[photoIndex].urls.small)
        

        
        return(null)
    
    }

    


    

    const sendMessage = async(e) => {
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;
        
        if (formValue === "space") {
            
            shortComand(formValue)
            console.log(result)
            await messagesRef.add({
                text: formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                // altDescription: result.alt_description,
                photoURL: result
            })

        } else {
            await messagesRef.add({
                text: formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                altDescription: "userPhoto",
                photoURL
            })
        }

        setFormValue('');

        dummy.current.scrollIntoView({ behavior: 'smooth' });

    }


  return (
      <>
        <main>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            {/* {messages && messages.map(msg => {if (msg === 'rymd') {
                    <ShortComand key={msg.id} message={msg} />
                } else {
                    <ChatMessage key={msg.id} message={msg} />
                }
            })} */}

            <div ref={dummy}></div>

        </main>

        <form onSubmit={sendMessage}>

            <input value={formValue} placeholder='Sjatt' onChange={(e) => setFormValue(e.target.value)}/>

            <button type='submit'>
                UwU
            </button>

        </form>
      </>
  )
}