import React from 'react';

const DisplayCards = ({cardTitle, amount, background}) => {
   
    return (
        <div className={`${background} text-white rounded w-60 px-4 py-5`}>
            <p className='font-bold text-2xl'>{cardTitle}</p>
            <p className='font-bold text-2xl'>$ <span>{amount}</span></p>
        </div>
    );
};

export default DisplayCards;