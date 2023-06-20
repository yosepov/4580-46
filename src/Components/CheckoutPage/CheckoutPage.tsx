import { TextField, colors } from '@mui/material';
import React, { useState } from 'react';
import "./checkoutPage.css"
import ComplexGrid from './ComplexGrid';
import MultipleSelectCheckmarks from './MultipleSelectCheckmarks';

export type Product = { gameName: string, gamePrice: string, amount: number  }


interface CheckoutPageProps {
  Products: Product[];
}

export const CheckoutPage = ({Products}: CheckoutPageProps) => {

  const [isBuyNow, setCheckoutNextState] = useState<boolean>(true);

    const handleIsCheckout = () => {
      setCheckoutNextState(!isBuyNow);
    }
  
  return (
    <div className='checkoutContainer'>
        <div className='checkoutBox'>
            <h1 className='checkoutTitle'>{isBuyNow ? "Checkout" : "Shipment Details"}</h1>
            <div className='imageBox'>
        <ComplexGrid />
            </div>
                    <form className='form' action="">
                      <MultipleSelectCheckmarks />
                      <input required className='input' type="number" placeholder='Enter amount...' min={1} />
                      <button className='submitBtn' type='submit'>Buy Now</button>
                    </form>
            <div className='videoBox'>
              <iframe className='video' src="https://www.youtube.com/embed/ASzOzrB-a9E?autoplay=1&mute=1" title="YouTube video player" allow='autoplay' allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}