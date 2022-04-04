const { test, expect, describe } = require('@jest/globals');
const ubigeoController = require('../../src/controllers/UbigeoController');
const pool = require('../../src/database');

describe('UbigeoController', () => {
    beforeEach(() => pool.getConnection());
    test('/ubigeo/get-disticts-of-lima', async () => {
        const event = {
            rawPath: '/ubigeo/get-disticts-of-lima',
            pathParameters: { operation: 'get-disticts-of-lima' }
        };
        const data = await ubigeoController.init(event);
        return expect(data.statusCode).toBe(200);
    });
    afterEach(() => pool.end());
});