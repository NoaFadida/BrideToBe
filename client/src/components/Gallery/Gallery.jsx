import React from "react";
import Luce_B from '../../assets/LuceBride.png';
import Shine_B from '../../assets/ShineBride.png';
import Fanasia_B from '../../assets/FantasiaB.png';
import Tokyo_B from '../../assets/Tokyo.png';
import FABIANA_Bride from '../../assets/FABIANA-Bride.png';
import NADIA from '../../assets/NADIA3.png';
import Amanda_B from '../../assets/Amanda.png';
import Aspen_B from '../../assets/Aspen3.png';
import Charm_B from '../../assets/Charm.png';
import Denise_B from '../../assets/Denise6-.png';
import Diem_B from '../../assets/Diem4.png';
import Rome_B from '../../assets/Rome.png';
import New_B from '../../assets/Next-Collection-bride.png';
import New_Collection from '../../assets/Next-Collection.png';

import './Gallery.scss';

const Gallery = () => {
    return (
        <div className='container'>
            <div className="img-wrapper">
                <p>LUCE</p>
                <img src={Luce_B}/>
            </div>
            <div className="img-wrapper">
                <p>AMANDA</p>
                <img src={Amanda_B}/>
            </div>
            <div className="img-wrapper">
                <p>ROME</p>
                <img src={Rome_B}/>
            </div>
            <div className="img-wrapper">
                <p>TOKYO</p>
                <img src={Tokyo_B}/>
            </div>
            <div className="img-wrapper-2">
                <p>ITALY</p>
                <img src={New_Collection}/>
            </div>
            <div className="img-wrapper">
                <p>SHINE</p>
                <img src={Shine_B}/>
            </div>
            <div className="img-wrapper">
                <p>FANTASIA</p>
                <img src={Fanasia_B}/>
            </div>
            <div className="img-wrapper">
                <p>CHARM</p>
                <img src={Charm_B}/>
            </div>
            <div className="img-wrapper">
                <p>ASPEN</p>
                <img src={Aspen_B}/>
            </div>
            <div className="img-wrapper">
                <p>DENIS</p>
                <img src={Denise_B}/>
            </div>
            <div className="img-wrapper">
                <p>PARIS</p>
                <img src={FABIANA_Bride}/>
            </div>
            <div className="img-wrapper">
                <p>NADIA</p>
                <img src={NADIA}/>
            </div>
            <div className="img-wrapper">
                <p>DIEM</p>
                <img src={Diem_B}/>
            </div>
            <div className="img-wrapper-2">
                <p>BEUTY</p>
                <img src={New_B}/>
            </div>
        </div>
    );
  };
  
export default Gallery;
