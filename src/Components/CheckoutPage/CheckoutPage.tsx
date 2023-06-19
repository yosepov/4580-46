import { TextField, colors } from '@mui/material';
import React, { useState } from 'react';
import "./checkoutPage.css"

type Product = {
    gameName: string;
    gamePrice: number;
    amount: number;
}

interface CheckoutPageProps {
    Products: Product[];
}

export const CheckoutPage = ({Products}: CheckoutPageProps) => {
    return(
        <div className='containerBox'>
            <div className='formContainer'>
                <h2>Details</h2>
                <form className='form' action="">
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                </form>
            </div>
        </div>
    )
}