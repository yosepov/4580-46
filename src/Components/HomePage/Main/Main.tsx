import React from 'react'
import './Main.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Card from '../Cards/Card';


const Main = () => {
  return (
    <section>
        <div className="main">
     <div className="arrow"><ArrowDownwardIcon /></div>
     <br />
     <div className="cards">
<Card image01='https://th.bing.com/th/id/R.0b0714cfb3ad2ba9960f4b38b37a9de1?rik=k8eHuRpqS1l9fQ&riu=http%3a%2f%2fgearnuke.com%2fwp-content%2fuploads%2f2015%2f04%2fgrand-theft-auto-v-3123.jpg&ehk=tXkZKrTGkQfO825jTRk58TJ0S8DpE3p%2bUbadGlnv3BM%3d&risl=&pid=ImgRaw&r=0' image02='https://th.bing.com/th/id/OIP.QiY9_ch3mhhluBEZvDlsFAHaEO?pid=ImgDet&rs=1' image03='https://th.bing.com/th/id/R.aaf9c5273c27a485f2cce8cb7e804f5c?rik=bRyYgfYp8QwrQQ&pid=ImgRaw&r=0' image04='https://media.moddb.com/cache/images/groups/1/8/7872/thumb_620x2000/world-of-tanks-wallpaper-3.jpg' image05='https://th.bing.com/th/id/OIP.pJi-dJVAYXY-mMWziZoE4QHaEc?pid=ImgDet&rs=1' image06='https://th.bing.com/th/id/OIP.FyJ2c3f01mJVCZLGGagDWgHaEo?pid=ImgDet&rs=1'  />      
    </div>
        </div>
    </section>
  )
}

export default Main