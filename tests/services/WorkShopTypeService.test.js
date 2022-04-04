const { test, expect, describe } = require('@jest/globals');
const workshopTypeService = require('../../src/services/WorkshopTypeService');
const pool = require('../../src/database');

describe('WorkshopTypeService', () => {
    beforeEach(() => pool.getConnection());
    test('getAll', async () => {
        const data = await workshopTypeService.getAll();
        return expect(data.rows.length).toBe(3);
    });
    afterEach(() => pool.end());
});