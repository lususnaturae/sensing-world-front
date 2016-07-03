/**
 * Created by marco on 2.7.2016.
 */
import { renderComponent, expect } from '../../test_helper';
import { SensorShow } from '../../../src/components/sensor/sensor_show';


describe('SensorShow', () => {
    let component;
    let props;

    beforeEach(() => {
        props = {
            fetchSensor: (id) => {
                return {};
            },
            activeSensor: {sensor: {}, error: null, loading: false},
            params: { id: 0}
        };
        component = renderComponent(SensorShow, props);
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('add sensor', () => {

        beforeEach(() => {
            props = {

                fetchSensor: () => {
                    return {};
                },
                activeSensor: {sensor: { id: 2,
                    name: 'Kitchen temperature',
                    usage_token: 'Temperature',
                    lat: 61.466306,
                    lon: 24.050828}, error: null, loading: false},
            };
            component = renderComponent(SensorShow, props);
        });

        it('shows sensor name inside h3', () => {
            expect(component.find('h3')).to.have.text('Kitchen temperature');
        })

    });
});
