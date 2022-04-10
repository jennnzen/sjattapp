import React from 'react'




export default function ShortComand() {

    const searchPhotos = () => {
        // console.log('click')
        let clientId = 'rmUwjdhpp6pKzYbJrlPKC43D9PfM_v6CLWCnNKDiF6M';
        let query = document.getElementById('search').value;
        // console.log(query)
        let url = 'https://api.unsplash.com/search/photos/?client_id='+clientId+'&query='+query;
    
        async function getData(){
        
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)

            data.results.forEach(photo => {
                let result = `
                    <img src='${photo.urls.regular}' alt='${photo.alt_description}'>
                    <a href='${photo.links.download}'
                `;

                $('#result').html(result);

                // document.getElementById('result').innerHTML(result)
            });
        }

        getData()
    
        // fetch(url)
        //     .then(function (data) {
        //         console.log(data);
        // })
    
    }

    return (
        <>
            <form>
                <input type='text' id='search' placeholder='SÖK'/>

                <button type='button' onClick={searchPhotos}>
                    OwO
                </button>
            </form>

            <div id='result'>

            </div>
        </>
    )
}
