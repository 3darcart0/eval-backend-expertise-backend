const pool = require('../database');

class VehicleService {
    static getMy = async (event) => {
        const [rows] = await pool.query("CALL usp_get_my_vehicles(?);", [event.person_id]);
        return {
            data: rows[0]
        }
    }

    // static getDeductible = async (event) => {
    //     const [rows] = await pool.query("CALL usp_get_deducible_x_vehicle(?);", [event.vehicle_id]);
    //     return {
    //         data: rows[0]
    //     }
    // }
}
module.exports = VehicleService;