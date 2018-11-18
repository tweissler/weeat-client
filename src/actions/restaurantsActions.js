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
    return function(dispatch){
        fetch(url,  {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)})
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