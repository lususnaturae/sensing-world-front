/**
 * Created by marco on 2.7.2016.
 */
import { expect } from '../test_helper';
import { FETCH_SENSORS, FETCH_SENSOR, GENERATE_MARKERS } from '../../src/actions/types';
import { fetchSensors, fetchSensor, generateMarkers } from '../../src/actions/index';

describe('actions', () => {

    describe('fetchSensors', () => {

        it('has the correct type', () => {
            const action = fetchSensors();
            expect(action.type).to.equal(FETCH_SENSORS);
        });

        it('has the correct payload', () => {
            const action = fetchSensors();
            expect(action.payload[0].name).to.equal('Outside temperature');
        });

    });
    describe('fetchSensor', () => {

        it('has the correct type', () => {
            const action = fetchSensor();
            expect(action.type).to.equal(FETCH_SENSOR);
        });

        it('has the correct payload', () => {
            const action = fetchSensor();
            expect(action.payload.name).to.equal('Kitchen temperature');
        });
    });

    describe('generateMarkers', () => {

        it('has the correct type', () => {
            const action = generateMarkers();
            expect(action.type).to.equal(GENERATE_MARKERS);
        });


        it('has the correct payload', () => {
            const action = generateMarkers();
            expect(action.payload[0].key).to.equal('Outside temperature');
        });

    });


});
