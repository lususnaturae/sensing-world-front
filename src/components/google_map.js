/**
 * Created by marco on 19/06/16.
 */
import React from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default (props) => {

    if (!props || (props.length === 0)) {
        return (
            <div>Not data for map!!</div>
        )
    }

    return (
        <GoogleMapLoader
            containerElement={ <div style={{ height: '400px' }} /> }
            googleMapElement={ <GoogleMap defaultZoom={12} defaultCenter={{lat: 61.466473  , lng: 24.050716}} /> }
        />

    );
}
