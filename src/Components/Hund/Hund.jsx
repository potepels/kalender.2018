import React from 'react';
import './Hund.scss';

class Hund extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {

       return (
        <div className="c_hund">
            <h2>{this.props.navn}</h2>
            <figure>
                <img src={this.props.bilde && this.props.bilde.sizes.medium} alt="Hei hei" />
            </figure>
           <div className="c_hund__text">
            <h3>{this.props.strofe}</h3>
            <dl>
                <dt>Rase</dt>
                <dd>{this.props.rase}</dd>
                <dt>Alder</dt>
                <dd>{this.props.alder}</dd>
                <dt>Liker</dt>
                <dd>{this.props.liker}</dd>
                <dt>Liker ikke</dt>
                <dd>{this.props.likerIkke}</dd>               
            </dl>
            <p>{this.props.info}</p>
           </div>
        </div>
		);
	}
}
export default Hund;