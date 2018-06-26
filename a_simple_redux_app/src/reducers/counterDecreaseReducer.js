
export default (state=1, action) => {
    switch(action.type){
        case "DECREMENT":
            let newState = state - action.step
            return newState
        default:
            return state
    }

}