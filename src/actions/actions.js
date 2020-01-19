export const REQUEST_DATA = 'REQUEST_DATA'; // action to represent waiting for response
export const GET_DATA_FIRST = 'GET_DATA_FIRST'; // action to represent receiving of data

export const requestData = () => ({ type: REQUEST_DATA });

export const getDataFirst = myData => ({ type: GET_DATA_FIRST, myData });

export const fetchData = () => dispatch => {
    dispatch(requestData());
    return getData().then(response => {
    // simulated delay
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    setTimeout(() => {
        return dispatch(getDataFirst(response))
    }, 1000);
});
};

export const getData = async () => {
    const res = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    return await res.json();
}