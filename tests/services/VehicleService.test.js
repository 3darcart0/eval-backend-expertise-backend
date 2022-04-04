const { test, expect, describe } = require('@jest/globals');
const vehicleService = require('../../src/services/VehicleService');
const pool = require('../../src/database');

describe('VehicleService', () => {
    beforeEach(() => pool.getConnection());
    test('getMy', async () => {
        const data = await vehicleService.getMy({
            person_id: 1
        });
        return expect(data.data[0].plate).toEqual("X1W859");
    });
    afterEach(() => pool.end());
});