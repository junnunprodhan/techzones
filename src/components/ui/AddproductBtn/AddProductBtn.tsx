'use client'

import React, { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';

const AddProductBtn = () => {
    const [addToCart, setAddToCart] = useState(0)
    const handleIncrease = (e: any) => {
        setAddToCart(addToCart + 1)
    }
    const handleDecrease = ()=>{
        if(addToCart > 0){
         setAddToCart(addToCart - 1 )
        }
    }
    return (
        <div>
            <div className='addToCartBtn flex items-center justify-between px-5 mr-3'>
                 <BiMinus onClick={handleDecrease} size={25}/>
                    <span>{addToCart}</span>
                <BiPlus onClick={handleIncrease} size={25}/>
            </div>
        </div>
    );
};

export default AddProductBtn;