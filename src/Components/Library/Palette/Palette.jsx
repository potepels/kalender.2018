import React from 'react';
import './Palette.scss';

const Palette = () => (
    <div className="c_palette">
        <h2>Farger!</h2>
        <div className="c_palette__color c_palette__color--navy">
            <span>Navy</span>
        </div>
        <div className="c_palette__color c_palette__color--gold">
            <span>Gold</span>
        </div>
        <div className="c_palette__color c_palette__color--choal">
            <span>Choal</span>
        </div>
        <div className="c_palette__color c_palette__color--steel">
            <span>Steel</span>
        </div>
        <div className="c_palette__color c_palette__color--beige">
            <span>Beige</span>
        </div>
        <div className="c_palette__color c_palette__color--salmon">
            <span>Salmon</span>
        </div>
        <div className="c_palette__color c_palette__color--momo">
            <span>Momo</span>
        </div>
        <div className="c_palette__color c_palette__color--sana">
            <span>Sana</span>
        </div>
        {/* <div className="c_palette__color c_palette__color--peach">
            <span>Peach #d1c292</span>
        </div> */}
    </div>
  )
  
export default Palette;