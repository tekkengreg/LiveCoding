import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import counterDecreaseReducer from './counterDecreaseReducer';

export default combineReducers({
    counter: counterReducer,
    counterdecrease: counterDecreaseReducer
});
