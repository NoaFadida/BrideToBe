import React from "react";
import './BorderBottom.scss';
import LocationIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from '@material-ui/icons/Phone';
import Luce_B from '../../../assets/LuceBride.png';

const BorderBottom = () => {
  return (
    <>
    <div className='body'>
      <div className='text-line'>
        <LocationIcon className='Icon'/>
        Tel-Aviv, Israel
      </div>
      
      <div className='text-line'>
        <PhoneIcon className='Icon'/>
        +972-9994699
      </div>
    </div>
    </>

  );
};

export default BorderBottom;