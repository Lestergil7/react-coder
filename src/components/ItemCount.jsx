import React from 'react'
import {useState} from 'react';

function ItemCount() {


    const [counter,SetCounter] = useState(0)
    
    const handleClick =()=>{
        SetCounter(counter+1);
    }


  return (

    <div className='flex'>
        <strong>Contador: {counter}</strong>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleClick}> Boton</button>
    </div>
  )
}

export default ItemCount