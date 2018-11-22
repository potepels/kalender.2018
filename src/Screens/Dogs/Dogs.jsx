import React from 'react';
import Header from '../../Components/Header/Header';
import Hund from '../../Components/Hund/Hund';
import './Dogs.scss';


class Dogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunder: [],
        }
    }

    componentDidMount() {
        let dataUrl = 'http://kaja.me/wp-json/acf/v3/hund';
        fetch(dataUrl)
            .then(response => response.json())            
            .then(hunder => this.setState({hunder: hunder.reverse()}));
    }

    render() {
        let hunder = this.state.hunder.map((hund, index) => {
            return <Hund
            key={index}
            alder={hund.acf.alder}            
            likerIkke={hund.acf.liker_ikke}
            liker={hund.acf.liker}
            info={hund.acf.info}
            rase={hund.acf.rase}
            strofe={hund.acf.strofe}
            bilde = {hund.acf.bilde}
            navn = {hund.acf.navn}
            />
        })

        return (
            <div className="t_dogs">
            <Header />
            <div className="g_center-content">
                {hunder}                
            </div>
        </div>
        );
    }
}

export default Dogs;