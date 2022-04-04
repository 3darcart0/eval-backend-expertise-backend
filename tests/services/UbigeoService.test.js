const { test, expect, describe } = require('@jest/globals');
const ubigeoService = require('../../src/services/UbigeoService');
const pool = require('../../src/database');

describe('UbigeoService', () => {
    beforeEach(() => pool.getConnection());
    test('getLima', async () => {
        const data = await ubigeoService.getLima();
        return expect(data.data.length).toBe(49);
    });
    afterEach(() => pool.end());
});