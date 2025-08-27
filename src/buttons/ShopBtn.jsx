import React from 'react'
import './ShopBtn.css'

export default function ShopBtn({ onClick }) {
    return (
        <>
            <button className="btn-shop" onClick={onClick}>Shop Now</button>
        </>
    );
}
