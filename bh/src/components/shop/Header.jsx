import React from 'react';
import { FbIcon, IgIcon, WsIcon } from '../../assets/Icons'
import './Header.css'

export function Header () {
  return (
    <header>
      <div className="logo">
        <img src='../../assets/BhSFazul.png' alt="Brazilian Hair"></img>
      </div>
      <h1 className='title'>Bienvenidos a Brazilian Hair
      </h1>
      <div className='socialicons'>
        <FbIcon />
        <IgIcon />
        <WsIcon />
      </div>

    </header>
  )
}