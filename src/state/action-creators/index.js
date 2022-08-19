export const addProduct = (amount)=> {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: amount
        })
    }
}

export const removeProduct = (amount)=> {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload: amount
        })
    }
}