/**
 * Created by marco on 19/06/16.
 */
import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default (props) => {
                                             
    if (!props || !props.data || (props.data.sensors.length === 0)) {
        return (
            <div>Not data for map!!</div>
        )
    }
    console.log(props.data.sensorsMarkers.map((marker, index) => {
        return (
            <Marker
                {...marker}

            />
        );
    }));

    return (
        <GoogleMapLoader
            containerElement={ <div style={{ height: '400px' }} /> }
            googleMapElement={ <GoogleMap defaultZoom={19} defaultCenter={{lat: 61.466473  , lng: 24.050716}} >
            {props.data.sensorsMarkers.map((marker, index) => {
              return (
                <Marker
                  {...marker}

                />
              );
            })}
                   </GoogleMap>
                  }

        />

    );
}
