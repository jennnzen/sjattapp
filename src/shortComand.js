// import React from 'react';
import React, { useState } from 'react';
import axios from "axios";




export default function ShortComand() {

    const [photo, setPhoto] = useState('');
    const [clientId, setClientId] = useState(
        'rmUwjdhpp6pKzYbJrlPKC43D9PfM_v6CLWCnNKDiF6M'
    );

    const [result, setResult] = useState([]);

    function handelChange(event) {
        setPhoto(event.target.value);
    }

    function handleSubmit (event) {
        console.log(photo);

        const url = 'https://api.unsplash.com/search/photos?page=1&query='+photo+'&client_id='+clientId;


        // axios.get(url)
        // .then((response) => {
        //     console.log(response)
        // })

        async function getData(){
            let response = await axios.get(url);
            console.log(response);
            setResult(response.data.results)

        }

        getData()

    }

    // const searchPhotos = () => {

    //     const [clientId, setClientId] = useState(
    //         'rmUwjdhpp6pKzYbJrlPKC43D9PfM_v6CLWCnNKDiF6M'
    //     );
    //     // console.log('click')
    //     // let clientId = 'rmUwjdhpp6pKzYbJrlPKC43D9PfM_v6CLWCnNKDiF6M';
    //     // let query = document.getElementById('search').value;
    //     // // console.log(query)
    //     // let url = 'https://api.unsplash.com/search/photos/?client_id='+clientId+'&query='+query;
    
    //     // async function getData(){
        
    //     //     let response = await fetch(url)
    //     //     let data = await response.json()
    //     //     console.log(data)

    //     //     data.results.forEach(photo => {
    //     //         let result = `
    //     //             <img src='${photo.urls.regular}' alt='${photo.alt_description}'>
    //     //             <a href='${photo.links.download}'
    //     //         `;

    //     //         // $('#result').html(result);

    //     //         // document.getElementById('result').innerHTML(result)
    //     //     });
    //     // }

    //     // getData()
    
    //     // fetch(url)
    //     //     .then(function (data) {
    //     //         console.log(data);
    //     // })
    
    // }

    return (
        <>
            <form>
                <input onChange={handelChange} type='text' id='search' placeholder='Säk har...'/>

                <button onClick={handleSubmit} type='button' >
                    OwO
                </button>
            </form>

            

            <div id='result'>
                {result.map((photo) => (
                    <img src={photo.urls.small} alt={photo.alt_description}/>
                ))}
            </div>
        </>
    )
}
