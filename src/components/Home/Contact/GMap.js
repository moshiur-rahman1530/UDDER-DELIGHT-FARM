import * as React from 'react';
import mapboxgl from 'mapbox-gl';
import Map, { Marker, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';

const GMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW9zaGl1cjE1MzAiLCJhIjoiY2t2MGdjOW1uMDJzMDJ1bHN0cmg0NmI5cyJ9.Z6SQPAhr5kM9xvYsi40CNg';
    return (
        <div className=''>
            <Map
                initialViewState={{
                    longitude: 91.0819328,
                    latitude: 23.8092288,
                    zoom: 10
                }}
                style={{ width: '100%', height: 500 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker longitude={91.0819328} latitude={23.8092288} anchor="bottom" >
                    <FontAwesomeIcon className='g-map-style-icon' icon={faMapMarkerAlt} />
                </Marker>
                <FullscreenControl />
                <GeolocateControl />
                <NavigationControl />
            </Map>

        </div>
    );
};

export default GMap;