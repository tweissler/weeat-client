export function fetchRestaurants(url) {
    return function(dispatch){
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: "FETCH_RESTAURANTS_FULFILLED", payload: result})
                },
                (error) => {
                    dispatch({type: "FETCH_RESTAURANTS_REJECTED", payload: error})
                }
            )
    }
}

export function addRestaurant(url, body) {
    var formBody = [];
    for (var property in body) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(body[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return function(dispatch){
        fetch(url,  {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody})
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({type: "ADD_RESTAURANT_FULFILLED", payload: result})
                },
                (error) => {
                    dispatch({type: "ADD_RESTAURANT_REJECTED", payload: error})
                }
            )
    }
}
