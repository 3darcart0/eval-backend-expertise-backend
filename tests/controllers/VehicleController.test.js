const { test, expect, describe } = require('@jest/globals');
const vehicleController = require('../../src/controllers/VehicleController');
const pool = require('../../src/database');

describe('VehicleController', () => {
    beforeEach(() => pool.getConnection());
    test('/vehicle/get-my-vehicles', async () => {
        const event = {
            rawPath: '/vehicles/get-my-vehicles',
            pathParameters: { operation: 'get-my-vehicles' },
            body: '{\n\t"request": {\n\t\t"payload": {\n\t\t\t"person_id": 1\n\t\t}\n\t}\n}'
        };
        const data = await vehicleController.init(event);
        return expect(data.statusCode).toBe(200);
    });
    afterEach(() => pool.end());
});