// import React from 'react';
// import React, { useState } from 'react';
// import axios from "axios";




// export default function ShortComand() {

//     const [photo, setPhoto] = useState('');
//     const [clientId, setClientId] = useState(
//         'rmUwjdhpp6pKzYbJrlPKC43D9PfM_v6CLWCnNKDiF6M'
//     );

//     const [result, setResult] = useState([]);

//     // function handelChange(event) {
//     //     setPhoto(event.target.value);
//     // }

//     const handelChange = (event) => {
//         setPhoto(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         const page = Math.floor(Math.random() * 20);

//         const url = 'https://api.unsplash.com/search/photos?page='+page+'&query='+photo+'&client_id='+clientId;

//         async function getData(){
//             let response = await axios.get(url);
//             setResult(response.data.results)

//         }

//         getData();
//         event.preventDefault();
//     };

//     return (
//         null
//         // <>
//         //     <form>
//         //         <input onChange={handelChange} type='text' id='search' placeholder='Säk har...'/>

//         //         <button onClick={handleSubmit} type='submit' >
//         //             OwO
//         //         </button>
//         //     </form>

            

//         //     <div id='result'>
//         //         {result.map((photo) => (
//         //             <img src={photo.urls.small} alt={photo.alt_description}/>
//         //         ))}
//         //     </div>
//         // </>
//     )
// }

//     // function handelChange(event) {
//     //     setPhoto(event.target.value);
//     // }

//     // const handelChange = (event) => {
//     //     setPhoto(event.target.value);
//     // };

//     // const handleSubmit = (event) => {
//     //     console.log(photo);
//     //     const page = Math.floor(Math.random() * 20);

//     //     const url = 'https://api.unsplash.com/search/photos?page='+page+'&query='+photo+'&client_id='+clientId;

//     //     async function getData(){
//     //         let response = await axios.get(url);
//     //         console.log(response);
//     //         setResult(response.data.results)
//     //         console.log(response);

//     //     }

//     //     getData();
//     //     event.preventDefault();
//     // };
