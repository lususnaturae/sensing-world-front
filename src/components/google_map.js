/**
 * Created by marco on 19/06/16.
 */
import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

const GOOGLEMAP_API_KEY='AIzaSyAZdsHsrsfz7zzeupWdbcjjhhhtMMwpzsU';

export default (props) => {

    if (!props || !props.data.markers || (props.data.markers.length === 0)) {
        return (
            <div>Not data for map!!</div>
        )
    }

    return (
        <GoogleMapLoader
            containerElement={ <div style={{ height: '400px' }} /> }
            googleMapElement={ <GoogleMap  defaultZoom={19} defaultCenter={{lat: 61.466473  , lng: 24.050716}} >
            {props.data.markers.map((marker, index) => {
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
