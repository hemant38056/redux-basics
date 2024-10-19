export const incrementAction = () => {
    return{
        type : "INCREMENT"
    }
}

export const decrementAction = () => {
    return{
        type : "DECREMENT"
    }
}

export const resetAction = () => {
    return{
        type : "RESET"
    }
}

export const incrementByValueAction = (value) => {
    return{
        type : "INCREMENTBYVALUE",
        payload : value
    }
}

export const movieDetailsAction = (movie) => {
    return{
        type : "SELECTMOVIE",
        payload : movie
    }
    
}