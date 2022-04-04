const { test, expect, describe } = require('@jest/globals');
const workshopTypeController = require('../../src/controllers/WorkshopTypeController');
const pool = require('../../src/database');

describe('WorkShopTypeController', () => {
    beforeEach(() => pool.getConnection());
    test('/type-workshop/get-all', async () => {
        const event = {
            rawPath: '/type-workshop/get-all',
            pathParameters: { operation: 'get-all' }
        };
        const data = await workshopTypeController.init(event);
        return expect(data.statusCode).toBe(200);
    });
    afterEach(() => pool.end());
});