import React from 'react';
import { IgIcon, WsIcon } from '../../assets/Icons'
import './Header.css'

export function Header () {

  return (
    <header>
      <div className="logo">
        <img src='https://res.cloudinary.com/dsbekpj9h/image/upload/v1703005345/Brazilian%20Hair/Brazilian_Hair_blanco_SIN_FONDO_ne6uj9.png' alt="Brazilian Hair"></img>
      </div>
      <h1 className='title'>Bienvenidos a Brazilian Hair
      </h1>
      <div className='socialicons'>
       
          <IgIcon />
        
  
          <WsIcon />

      </div>

    </header>
  )
}