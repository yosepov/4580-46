import React from 'react'
import './ProfilePage.css'
import { InputText } from '../Form/Input/InputText';

interface ProfilePageProps {
    userImg: string;
    username: string;
    nickname: string;
    emai: string;
}

export const ProfilePage = (props: ProfilePageProps) => {
    return <div>
            <img src={props.userImg} ></img>
            <p> {props.username}</p>
            <p> {props.nickname}</p>
            <p> {props.emai}</p>
        </div>

}