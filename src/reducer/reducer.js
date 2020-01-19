import { combineReducers } from 'redux';
import { GET_DATA_FIRST, REQUEST_DATA } from '../actions/actions';

const initialState = {
  isFetching: false,
  myData: []
};

const response = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
        return {
        ...state,
        isFetching: true
        };
    case GET_DATA_FIRST:
        return {
        ...state,
        isFetching: false,
        myData: action.myData
        };
    default:
        return state;
  }
};

const rootReducer = combineReducers({
  response // this key can be called anything, 'response' is just an example
});

export default rootReducer;