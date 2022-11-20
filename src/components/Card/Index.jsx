import React from 'react';
import './style.css';
export default function Card({id,img,paragraph,text}) {
  return (
    <div className='card_wrap' key={id}>
        <img src={img} alt='photo' />
        <div className="text_wrap">
          <h1 className='font-size_1626'>{paragraph}</h1>
          <p className='font-size_2233'>{text}</p>
        </div>
    </div>
  )
}
