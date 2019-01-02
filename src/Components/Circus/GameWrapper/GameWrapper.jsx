import React from 'react';
import './GameWrapper.scss';
import GameEntry from '../GameEntry/GameEntry';

class GameWrapper extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {

       return (
        <div className="c_game-wrapper">
           <h2>Her kommer spillene</h2>
           <GameEntry />
        </div>
		);
	}
}
export default GameWrapper;