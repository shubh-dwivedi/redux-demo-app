const reducer = (state=0, action)=> {
    if(action.type === 'add') {
        return state + action.payload
    } else if(action.type === 'remove') {
        return (action.payload<=state?state - action.payload:state)
    } else {
        return state
    }
}

export default reducer