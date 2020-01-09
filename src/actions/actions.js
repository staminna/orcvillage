export const REQUEST_DATA = 'REQUEST_DATA'; // action to represent waiting for response
export const GET_DATA_FIRST = 'GET_DATA_FIRST'; // action to represent receiving of data

export const requestData = () => ({ type: REQUEST_DATA });

export const getDataFirst = myData => ({ type: GET_DATA_FIRST, myData });

export const fetchData = () => dispatch => {
    dispatch(requestData());
    return getData().then(things => {
    // simulated delay
    setTimeout(() => {
        return dispatch(getDataFirst(things))
    }, 1000);
});
};

const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
}