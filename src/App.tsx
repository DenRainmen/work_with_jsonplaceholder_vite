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
                buttonName={"Get REQUEST"}
                callBack={getRequestHandler}
                clearPage={clearPage}
            />

            {dataFromJsonPlaceholder}



            {/*<header className="App-header">*/}

            {/*  <img src={logo} className="App-logo" alt="logo" />*/}

            {/*  <p>*/}
            {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}


        </div>
    );
}

export default App;
