import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/namelogo.png';
import {BrandSmall} from '../../components';

import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#aboutMe">About me</a></p>
  <p><a href="#blog">Achievements</a></p>
  <p><a href="#smallSkills">Skills</a></p>
  <p><a href="#showCase1">Robo-AO</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ugport__navbar">
      <div className="ugport__navbar-links">
        <div className="ugport__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='ugport__navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='ugport__navbar-sign'>
        <BrandSmall />
      </div>

      <div className='ugport__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
        <div className="ugport__navbar-menu_container scale-up-center">
          <div className="ugport__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="ugport__navbar-menu_container-links-sign">
            <BrandSmall />
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar