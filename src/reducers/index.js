import { combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        case "RESET" : return 0;
        case "INCREMENTBYVALUE" : return state + action.payload;
        default : return state;
    }
}

const MovieListReducer = () => {
    return [
        {id: 1, title : "Iron Man", year : 2008, lead : "Robert Downey Jr."},
        {id: 2, title : "The Incredible Hulk", year : 2008, lead : "Edward Norton"},
        {id: 3, title : "Thor", year : 2011, lead : "Chris Hemsworth"},
        {id: 4, title : "Captain America", year : 2011, lead : "Chris Evans"},
        {id: 5, title : "Avengers", year : 2012 , lead : "Robert Downey Jr."}
    ]
}

const movieDetailsReducer = (state = null, action) => {
    switch(action.type){
        case "SELECTMOVIE" : return action.payload;
        default : return state;
    }
}

const reducers = combineReducers({
    count : counterReducer,
    movies : MovieListReducer,
    movieDetails : movieDetailsReducer

})

export default reducers;