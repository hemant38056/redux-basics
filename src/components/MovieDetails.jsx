import React from 'react';
import { useSelector } from 'react-redux';

function MovieDetails(props) {
    const {movieDetails} = useSelector(state => state)
    return (
        <div className='container'>
            {
                movieDetails?
                <div className="card bg-danger text-white mt-4">
                    <p>{movieDetails.id}</p>
                    <h2>{movieDetails.title}</h2>
                    <h5>{movieDetails.lead}</h5>
                    <p>{movieDetails.year}</p>
                </div>
                :
                <p>Please Select a movie to show details</p>
            }
        </div>
    );
}

export default MovieDetails;