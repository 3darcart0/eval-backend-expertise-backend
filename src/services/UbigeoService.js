const constans = require('../config/constans');
const pool = require('../database');

class WorkshopTypeService {
    static getLima = async () => {
        const [rows] = await pool.query("CALL usp_get_lima_districts(?);", [constans.PROVINCE]);
        return {
            data: rows[0]
        }
    }
}
module.exports = WorkshopTypeService;