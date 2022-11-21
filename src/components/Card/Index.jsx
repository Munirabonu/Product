import React from 'react';
import './style.css';
export default function Card({id,img,by,date,text}) {
  return (
    <div className='card_wrap' key={id}>
        <img src={img} alt='card' />
        <div className="text_wrap">
          <h1 className='font-size_1626'>By <span>{by}</span> |  {date}</h1>
          <p className='font-size_2440'>{text}</p>
        </div>
    </div>
  )
}
