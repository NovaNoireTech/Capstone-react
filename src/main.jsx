import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Membership from './components/membership.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path= '/' element= {<Layout/> }> 
      <Route index element= {<App/> }/> 
      <Route path= "membership" element= {<Membership/> }/> 

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

