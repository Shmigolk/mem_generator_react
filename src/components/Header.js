import React from "react";
import TrollFace from '../images/Troll-Face.png'

export default function Header(){
    return (
        <header className='header'>
            <img src={TrollFace} alt="oups..."
             className='header--image'/>
            <h2 className='header--title'>
                Meme generator
            </h2>
            <h4 className='header--project'>
                React course project 3</h4>
        </header>
    )
}