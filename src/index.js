import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WatchContextProvider from './Components/Context/WatchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<WatchContextProvider>
    <App />
</WatchContextProvider>
);


