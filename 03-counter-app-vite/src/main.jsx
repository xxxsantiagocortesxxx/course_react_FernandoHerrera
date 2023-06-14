import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
// import {App,numero} from './HelloWorld';


import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorld';

import { CounterApp } from './CounterApp';




//renderiza /imagino que esto lo conviete en el pricipal
ReactDOM.createRoot( document.getElementById('root')).render(


    //aqui puedo definir una prop
    <React.StrictMode>
        <CounterApp  value = {234}/>
    </React.StrictMode>

)

