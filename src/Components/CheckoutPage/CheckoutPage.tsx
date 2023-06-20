import { TextField, colors } from '@mui/material';
import React, { useState } from 'react';
import "./checkoutPage.css"

export type Product = { gameName: string, gamePrice: string, amount: number  }


interface CheckoutPageProps {
  Products: Product[];
}

export const CheckoutPage = ({Products}: CheckoutPageProps) => {

  const [isBuyNow, setCheckoutNextState] = useState<boolean>(false);

    const handleIsCheckout = () => {
      setCheckoutNextState(!isBuyNow);
    }

  return (
    <div className='checkoutContainer'>
        <div className='checkoutBox'>
            <h1 className='checkoutTitle'>{isBuyNow ? Products[0].gameName : "Shipment Details"}</h1>
            
            <div className='imageBox'>
              <img className='image' width={300} src="https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/homepage/common/bf-2042-section-bg-homepage-hero-keyart-xl.jpg.adapt.1920w.jpg" alt="" />
            </div>
                    <form className='form' action="">
                      <input required className='input' type="text" placeholder='Enter Namegame...' maxLength={15} />
                      <input required className='input' type="number" placeholder='Enter amount...' min={1} />
                      <button type='submit'>Buy Now</button>
                    </form>
            <div className='videoBox'>
              <iframe className='video' src="https://www.youtube.com/embed/ASzOzrB-a9E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}