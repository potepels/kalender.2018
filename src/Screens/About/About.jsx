import React from 'react';
import Header from '../../Components/Header/Header';
import './About.scss';

const About = () => (
    <div className="t_about">
        <Header />
        <div className="g_center-content">
            <div className="t_about__text">
                <h1>Hei!</h1>
                <p>Veldig hyggelig at du stikker innom siden. Planen var jo å lage en flunkende ny historie med ny tegninger til 2018, men slik ble det ikke. Det tar nemlig veldig lang tid å skrive og tegne alt sammen, og jammen kom ikke livet og tidsklemma og beit en i rumpa igjen.</p>
                <p>Denne julekalenderen er et lite hobbyprosjekt jeg har laget på fritiden, slik at jeg får øvet meg på nye ting. Det er kanskje ikke nytt innhold her i år, men den er i det minste skrevet helt om slik at den er laget i React.js. Laget med Create React App 2.0 i bunn, og WordPress som headless CMS. Prøvde meg på nye farger også, men den grønne kræsjer jo helt med 2016-fargene. Jaja. #yolo. Neste gang, Kaja. Neste gang.</p>
                <p>Idé, utvikling og illustrasjon av meg, Kaja H. Kristiansen. Stor takk til tålmodige sjeler som har hjulpet meg når jeg har revet av meg håret av arrays og promises, og takk for korrekturlesing på tekstene.</p>
                <p>Har du en kommentar eller noe på hjertet, kan du slenge meg en e-post på kaja@potepels.com. PS: hvis du bruker Internet Explorer og ting ser litt rart ut, så bytt nettleser. For din egen del. Internett er mye penere når en ikke bruker Internet Explorer.</p>
                <p>Takk for meg!</p>
            </div>
        </div>
    </div>
);

export default About;

