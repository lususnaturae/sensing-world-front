/**
 * Created by marco on 2.7.2016.
 */
import { expect } from '../test_helper';
import sensorsReducer from '../../src/reducers/sensors_reducer';
import { FETCH_SENSORS, FETCH_SENSOR, GENERATE_MARKERS } from '../../src/actions/types';

describe("Sensors Reducer", () => {

    

    it('handles action of type FETCH_SENSORS', () => {
        const action = {
            type: FETCH_SENSORS,
            payload: [
                { id: 1,
                    name: 'Outside temperature',
                    usage_token: 'Temperature',
                    lat: 61.466473,
                    lon: 24.050716},
                { id: 2,
                    name: 'Kitchen temperature',
                    usage_token: 'Temperature',
                    lat: 61.466306,
                    lon: 24.050828}

            ]
        };

        expect(sensorsReducer([], action).sensorsList.sensors[0].name).to.eql('Outside temperature');

    });
    it('handles action of type FETCH_SENSOR', () => {
        const action = {
            type: FETCH_SENSOR,
            payload: { id: 2,
                name: 'Kitchen temperature',
                usage_token: 'Temperature',
                lat: 61.466306,
                lon: 24.050828}
        };
        expect(sensorsReducer([], action).activeSensor.sensor.name).to.eql('Kitchen temperature');

    });
    it('handles action of type GENERATE_MARKERS', () => {
        const action = {
            type: GENERATE_MARKERS,
            payload: [{
                position: {
                    lat: 61.466473,
                    lng: 24.050716
                },
                key: 'Outside temperature',
                defaultAnimation: 2
            },{
                position: {
                    lat: 61.466306,
                    lng: 24.050828
                },
                key: 'Kitchen temperature',
                defaultAnimation: 2
            }]
        };

        expect(sensorsReducer([], action).sensorsMarkers.markers[0].key).to.eql('Outside temperature');

    });


});