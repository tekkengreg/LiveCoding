
export default (state=1, action) => {
    switch(action.type){
        case "INCREMENT":
            let newState = state+action.increment
            return newState
        default:
            return state
    }

}