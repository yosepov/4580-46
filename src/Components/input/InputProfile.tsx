import React from 'react'
import './inputProfile.css'

interface InputProfilsProps{
userImg: string;
  username: string;
  nickname: string;
  email: string;
  country:string;

}

export const InputProfile = ({userImg, username, nickname, email, country}:InputProfilsProps) => {
    return (
        <div className='InputProfileContainer'>
          <div >
        <img src={userImg} alt={username} />
        </div >
        <div className='UserInfo'>
        <h2>{username} ({nickname})</h2>
        <h3>{country}</h3>
        </div>
        <p>{email}</p>
      </div>
    )
}