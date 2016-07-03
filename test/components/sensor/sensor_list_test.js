/**
 * Created by marco on 2.7.2016.
 */
import { renderComponent, expect } from '../../test_helper';
import { SensorsList } from '../../../src/components/sensor/sensor_list';
import { FETCH_SENSORS, GENERATE_MARKERS, FETCH_SENSOR } from '../../../src/actions/types';

describe('SensorsList', () => {

    let component;
    let props;

    beforeEach(() => {
        props = {
            fetchSensors: () => {
                return {
                    type: FETCH_SENSORS,
                    payload: [

                    ]
                };
            },
            generateMarkers: () => {
                return {
                    type: GENERATE_MARKERS,
                    payload: []
                }
            },
            fetchSensor: () => {
                return {};
            },

                sensorsList: {sensors: [], error: null, loading: false},
                newSensor: {sensor: {}, error: null, loading: false},
                activeSensor: {sensor: {}, error: null, loading: false},
                deletedSensor: {sensor: {}, error: null, loading: false},
                sensorsMarkers: {markers: [], error: null, loading: false}

        }

        component = renderComponent(SensorsList, props);


    });
    it('has sensor-list-table-head class', () => {
        expect(component.find('thead')).to.have.class('sensor-list-table-head');
    });


    it('has NO table rows', () => {
        expect(component.find('tbody > tr')).not.to.exist;
    });

    describe('add 2 temperature sensors', () => {

        beforeEach(() => {
            props = { ...props, sensorsList:
            {sensors: [{ id: 1,
                name: 'Outside temperature',
                usage_token: 'Temperature',
                lat: 61.466473,
                lon: 24.050716},
                { id: 2,
                    name: 'Kitchen temperature',
                    usage_token: 'Temperature',
                    lat: 61.466306,
                    lon: 24.050828}], error: null, loading: false}
            };
            props = { ...props, sensorsMarkers:
            {sensors: [{
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
            }], error: null, loading: false}
            };
            component = renderComponent(SensorsList, props);
        });

        it('has 2 table rows', () => {
            expect(component.find('tbody > tr').length).to.equal(2);
        });

    });

});

