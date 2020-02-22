import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardSubtitle} from 'reactstrap';

class PlayerCard extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        console.log('Players called in players.js');
        fetch('http://localhost:5000/api/players')
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(err => console.log("Error retrieving playerCard array in PlayerCard.js", err))
    };

    render(){
        console.log(this.state.data)
        return (
            <div className='player-container'>
            <h4 className='player-header'>Athletes: </h4>
            <div className='card-deck'>
                {this.state.data.map(data => (
                    <Card>
                    <CardTitle>Name: {data.name}</CardTitle>
                    <CardText>Country: {data.country}</CardText>
                    <CardText>Searches: {data.searches}</CardText>
                    </Card>
                 ))}
            </div>
         </div>
        )
    }
}
export default PlayerCard;