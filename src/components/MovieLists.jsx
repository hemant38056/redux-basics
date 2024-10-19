import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetailsAction } from '../actions';

function MovieLists(props) {
    const {movies} = useSelector((state) => (state))
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <div className="row gy-3">
                {
                    movies.map((movie) => (
                        <div key={movie.id} className="col-lg-4">
                            <div className="card bg-danger text-white">
                                <div className="card-body">
                                    <p>{movie.id}</p>
                                    <h3>{movie.title}</h3>
                                    <h5>{movie.lead}</h5>
                                    <p>{movie.year}</p>
                                    <button onClick={() => {dispatch(movieDetailsAction(movie))}} className='btn btn-warning'>View</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
}

export default MovieLists;