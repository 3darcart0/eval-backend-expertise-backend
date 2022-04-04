const pool = require('../database');
class WorkshopTypeService {
    static getAll = async () => {
        const [rows] = await pool.query("SELECT id, type_name FROM workshop_types;", []);
        return {
            rows
        }
    }
}
module.exports = WorkshopTypeService;