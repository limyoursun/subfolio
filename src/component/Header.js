import React from 'react';
import { Link } from 'react-router-dom';

import logo from "./../assets/images/img_logo.gif"

import style from "./../styles/Header.module.css"

function Header(){
  return(
    <header className={style.wrap}>
      <Link to="https://www.naver.com/">
        <img src={logo} alt="logo"/>
      </Link>
    </header>
  )
}
export default Header;