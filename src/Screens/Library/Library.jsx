import React from 'react';
import Header from '../../Components/Header/Header';
import Palette from '../../Components/Library/Palette/Palette';
import './Library.scss';

const Library = () => (
    <div className="t_about">
        <Header />
        <div className="g_center-content">
            <div className="t_about__text">
                <h1>Bibliotek</h1>
                <Palette />
            </div>
        </div>
    </div>
);

export default Library;

