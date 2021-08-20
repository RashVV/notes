import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () =>(
   <nav className="navbar navbar-dark navbar-expand-lg bg-primary ">
       <div className="navbar-brand">
           Note App
       </div>
        <ul className="navbar-nav">
       <li className="nav-item">
          <NavLink
           className="nav-link"
           to="/" 
           exact
           >
               Главная страница
           </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
           className="nav-link" 
           to="/about"
           >Страница Информация</NavLink> 
        </li>  
     </ul>
     </nav>
)
 