import React from 'react';
import EpisodeCard from './EpisodeCard.js';
import {connect} from 'react-redux';
import {getEpisodes} from '../actions';
import {Button} from 'reactstrap';

function Cards(props) {

    return (
        <>
            <Button 
            outline 
            color='success'
            onClick={() => props.getEpisodes()}
            >
                Get Episodes
            </Button>
            <div className="cards-container">
                {props.episodes.map(episode => 
                    {
                        return <EpisodeCard key={episode.id} episode={episode} />
                    }
                )}
            </div>
        </>
    )
}

function mapStateToProps(state){
    return {
        episodes: state.episodes,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect((mapStateToProps), {getEpisodes})(Cards);