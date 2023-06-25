import React from 'react'
interface UpComingProps {
    title: string;
    description:string;
    img:string;
    uploadDate: string;
}

const UpComing = ({title , description , img , uploadDate}:UpComingProps) => {
  return (
    <div style={{textAlign: "left",color: 'white' , fontSize: '1rem' , padding: "12px" , marginTop:"50px"}}>
    <h2 style={{textAlign: "center"}}>UpComing Games for 2023 and beyond</h2>
    <div className="news">
    <div style={{display: "flex" ,marginLeft: "100px" , marginTop:"50px"}}>
        <img src="https://cdn.mos.cms.futurecdn.net/FmfGTNktpELhYVXnDKpAsc-1200-80.jpeg.webp" alt="news" style={{width: "450px", height: "350px"}}/>
        
        <h3>dwdqdw</h3>
    <p style={{marginLeft: "10px"}}>Missing Darksides style action games? Then you may want to check out Atlas Fallen, <br /> the new action-RPG from the Deck 13 and Focus Entertainment, <br /> who previously teamed up to bring you The Surge and its sequel. <br /> With a beautiful sand world to explore, a host of fun weapons to wield, <br /> and some truly monstrous creatures to combat, <br /> we're eagerly anticipating a fresh look at this one. </p>
    
    <p style={{marginTop: "330px" , background: "black" , width: "250px" , textAlign: "center"}}>Release date: August 10, 2023</p>
    </div>

    </div>
  </div>
  )
}

export default UpComing