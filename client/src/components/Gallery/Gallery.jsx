import React from "react";
import Luce_B from '../../assets/LuceBride.png';
import Shine_B from '../../assets/ShineBride.png';
import Fanasia_B from '../../assets/FantasiaB.png';
import Tokyo_B from '../../assets/Tokyo.png';
import './Gallery.scss';

const Gallery = () => {
    return (
        <div className='container'>
            <div className="img-wrapper">
                <p>LUCE</p>
                <img src={Luce_B}/>
            </div>
            <div className="img-wrapper">
                <p>SHINE</p>
                <img src={Shine_B}/>
            </div>
            <div className="img-wrapper">
                <p>TOKYO</p>
                <img src={Tokyo_B}/>
            </div>
            <div className="img-wrapper">
                <p>FANTASIA</p>
                <img src={Fanasia_B}/>
            </div>
        </div>
    );
  };
  
export default Gallery;
