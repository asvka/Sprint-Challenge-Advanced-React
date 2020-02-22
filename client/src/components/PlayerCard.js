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
            <div>
            <h1>Women's World Cup Athletes </h1>
            <h5>Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide</h5>
            <div className='card-deck'>
                {this.state.data.map(data => (
                    <Card>
                        <CardBody>
                            <CardTitle><h2>{data.name}</h2></CardTitle>
                            <CardText>Country: {data.country}</CardText>
                            <CardSubtitle>Searches: {data.searches}</CardSubtitle>
                        </CardBody>
                    </Card>
                 ))}
            </div>
         </div>
        )
    }
}
export default PlayerCard;