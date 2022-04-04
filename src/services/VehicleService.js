const pool = require('../database');

class VehicleService {
    static getMy = async (event) => {
        const [rows] = await pool.query("CALL usp_get_my_vehicles(?);", [event.person_id]);
        return {
            data: rows[0]
        }
    }
}
module.exports = VehicleService;