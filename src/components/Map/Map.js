import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'

const RestOnMap = ({name}) => <div className='map-name'><img className='location-icon' src={require('../../images/location.png')}/>{name}</div>;

class Map extends Component {

    static defaultProps = {
        center: [40.712800, -74.006000],
        zoom: 10,
    };

    render() {
        const restaurants = this.props.restaurants;

        return(
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBSFVlgt2czZ7ZYaBBaicXjvC7xKyzkNJ4"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    {restaurants.map(rest => {
                        let coordinates = rest.address.split(" ");
                        return <RestOnMap
                            lat={coordinates[0]}
                            lng={coordinates[1]}
                            name={rest.name}/>
                    })}
                </GoogleMapReact>
            </div>

        );
    }
}

export default Map;
