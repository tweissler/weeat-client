export const FETCH_RESTAURANTS_FULFILLED = 'FETCH_RESTAURANTS_FULFILLED';
export const FETCH_RESTAURANTS_REJECTED = 'FETCH_RESTAURANTS_REJECTED';
export const ADD_RESTAURANT_FULFILLED = 'ADD_RESTAURANT_FULFILLED';
export const ADD_RESTAURANT_REJECTED = 'ADD_RESTAURANT_REJECTED';
export const CHANGE_URL = 'CHANGE_URL';

export const fetchRestaurants = url => (
    function(dispatch){
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: FETCH_RESTAURANTS_FULFILLED, payload: result})
                },
                (error) => {
                    dispatch({type: FETCH_RESTAURANTS_REJECTED, payload: error})
                }
            )
    });

export const addRestaurant = (url, body) => (
    function(dispatch){
        var formBody = [];
        for (var property in body) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(body[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch(url,  {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody})
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: ADD_RESTAURANT_FULFILLED, payload: result})
                },
                (error) => {
                    dispatch({type: ADD_RESTAURANT_REJECTED, payload: error})
                }
            )
    });

export const changeUrl = (newUrl) =>
    (function(dispatch){
        dispatch({type: CHANGE_URL, payload: newUrl})
    });


