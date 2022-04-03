const { test, expect, describe } = require('@jest/globals');
const workshopTypeController = require('../../src/controllers/WorkshopTypeController');
const pool = require('../../src/database');

describe('WorkShopTypeController', () => {
    beforeEach(() => pool.getConnection());
    test('/type-workshop/get-all', async () => {
        const event = {
            routeKey: 'GET /type-workshop/{operation}',
            rawPath: '/type-workshop/get-all',
            rawQueryString: '',
            headers: {
                Host: 'localhost:3000',
                'User-Agent': 'insomnia/2022.2.1',
                Accept: '*/*'
            },
            queryStringParameters: null,
            body: null,
            pathParameters: { operation: 'get-all' },
            isBase64Encoded: false,
        };
        const data = await workshopTypeController.init(event);
        return expect(data.statusCode).toBe(200);
    });
    afterEach(() => pool.end());
});