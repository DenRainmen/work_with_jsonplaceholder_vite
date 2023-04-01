import React, { useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button'


type SinglePost = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}


function App() {

    let [apiData, setApiData] = useState<Array<SinglePost>>([])

    let dataFromJsonPlaceholder = apiData.map(el => {
        return (
            <div>
                <b>{`Post#${el.id}: `}</b>
                <span>{el.title}</span>
            </div>

        )
    })


    const getRequestHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
            .then(response => response.json())
            .then(json => setApiData(json))
    }

    const clearPage = () => {
        setApiData([])
    }

    // console.log('Data from JSONPlaceholder', apiData)

    // хук useEffect позволяет нам сразу(без участия кнопки) получить данные с API
    // useEffect(()=>{getRequestHandler()},[])

    return (
        <div className="App">
       
        
            <Button
                buttonName={"Сделать запрос"}
                callBack={getRequestHandler}
                clearPage={clearPage}
            />

            

            {dataFromJsonPlaceholder}



            


        </div>
    );
}

export default App;
