import React from "react";
import './AboutUs.scss';
import FABIANA_B from '../../assets/FABIANA-Bride.png';


const AboutUs = () => {
    return (
    <div class="container-about">
        <div class="center">
            <div class="about-quote theme-light">
                {/* <h2> ABOUT US </h2> */}
                <p>
                    Over the past  decade our team has established itself as one of the leading couture fashion houses, with garments characterized by their high-end fabrications, meticulous sewing techniques, and of course, our unique technology which enables us to make each garment meet the wearer’s exact measurements from overseas. These values have been instilled in our fashion house.
                </p>
                <p>Our goal is to continue developing our unique technological systems in order to further enhance our capabilities and deliver our designs to each beautiful woman looking to wear a garment created for her and only her.
                Take part in our journey by reading our weekly blogs and following us on social media.</p>
                <p>VOGUE, APRIL 2022</p>
               
            </div>
            <img src={FABIANA_B}/>
        </div>
    </div>
    );
};
export default AboutUs;


  