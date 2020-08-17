import { Client, Service, Adapter, clientCode } from './adapter'

describe('Adapter Tests', () => {
    test('should return the length in centimeters', () => {
        const client = new Client();
        const result = clientCode(client);
        expect(result).toEqual('17 cm');
    });

    test('should return the object with length unit in feet', () => {
        const service = new Service();
        expect(service.requestInFt()).toEqual(
            {
                value: 12,
                unit: 'ft'
            }
        );
    });

    test('should return the converted value in centimeters', () => {
        const service = new Service();
        const adapter = new Adapter(service);
        const result = clientCode(adapter);
        expect(result).toEqual('365.76 cm');
    });
});