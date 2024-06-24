import React from'react'


function Button({num}){

    const add = () => {
    num[1]((prevCounter) => prevCounter + 1);
  };


    return (
        <>
        <button  onClick={add}>Subscribe</button>
        </>
    )
}

export default Button