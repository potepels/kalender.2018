import React from 'react';
import './GameEntry.scss';

class GameEntry extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
       return (
        <div className="c_game-entry">
           <h3>Et lite spill</h3>
        </div>
		);
	}
}
export default GameEntry;