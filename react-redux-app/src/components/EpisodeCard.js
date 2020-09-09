import React from 'react';
import {Card, CardHeader, CardBody, CardText} from 'reactstrap';
export default function EpisodeCard(props){
    return (
        <Card className="card-container">
            <CardHeader>
                <h3>Name: </h3> 
            </CardHeader>
            <CardBody>
                <CardText>
                    <div>episode: </div>
                    <div>air date: </div>
                    <div>characters: </div>
                </CardText>
            </CardBody>
        </Card>
    )
}