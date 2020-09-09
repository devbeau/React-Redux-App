import React from 'react';
import {Card, CardHeader, CardBody, CardText} from 'reactstrap';
export default function EpisodeCard({episode}){
    return (
        <Card className="card-container">
            <CardHeader>
                <h3>Name: {episode.name}</h3> 
            </CardHeader>
            <CardBody>
                <CardText>
                    <div>episode: {episode.episode}</div>
                    <div>air date:{episode.air_date}</div>
                    <div>characters: </div>
                </CardText>
            </CardBody>
        </Card>
    )
}