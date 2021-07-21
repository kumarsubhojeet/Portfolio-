import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'; 
import './bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'

import "./CSS/Navbar.css"
import "./CSS/Home.css"
import "./CSS/About.css"
import './CSS/Edu.css'
import "./CSS/tech.css"
import "./CSS/Project.css"
import "./CSS/Service.css"
import "./CSS/Contact.css"
import "./CSS/Footer.css"


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


