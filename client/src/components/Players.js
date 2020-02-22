import React from 'react';

import PlayerCard from './PlayerCard';

class Players extends React.Component {
    constructor(){
        super();
        this.state = {
            players: []
        };
    }
    componentDidMount() {
        console.log('Players called in players.js');
        fetch('http://localhost:5000/api/players')
        .then(res => res.json())
        .then(players => this.setState({ players }))
        .catch(err => console.log("Error retrieving players array in players.js", err))
    };
    render (){
        console.log('Players data: ', this.state.players);
        return(
            <div>
                <PlayerCard
                key={this.state.id}
                id={this.state.id}
                name={this.state.name}
                country={this.state.country}
                searches={this.state.searches}
                />
            </div>
        )
    }
}
export default Players;