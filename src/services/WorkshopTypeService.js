const pool = require('../database');
class WorkshopTypeService {
    static getAll = async (request) => {
        const [rows] = await pool.query("SELECT id, type_name FROM workshop_types;", []);
        return {
            rows
        }
    }
}
module.exports = WorkshopTypeService;