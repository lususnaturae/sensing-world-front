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
    debugger;
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100px'}} /> }
            googleMapElement={ <GoogleMap defaultZoom={12} defaultCenter={{lat: 61  , lng: 24}} /> }
        />

    );
}
