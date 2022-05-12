import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Header from './components/header'
import SHOPPAGE from './pages/shopdetail';
import Layout from './pages/Layout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>


<Header />
<BrowserRouter>
      <Routes>
       


           <Route  index  element={<App />} />
          <Route path="shopdetail" element={<SHOPPAGE />} />
     
        
        
      </Routes>
    </BrowserRouter>


 
   
       


  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
