const pool = require('../database');
class WorkshopService {
    static getFilter = async (event) => {
        event = event.params;
        let query = `SELECT w.id,wt.type_name,w.workshop_name,w.address_workshop,w.telephone_workshop,w.web
        FROM workshops w
        INNER JOIN workshop_types wt
        ON w.workshop_type_id=wt.id
        WHERE w.active = 1 `;
        if (event !== undefined) {
            if (event.person_id === undefined && event.ubigeo_id !== undefined) {
                query += ` AND w.ubigeo_id = ${event.ubigeo_id} `;
            }
            if (event.person_id === undefined && event.type_id !== undefined) {
                query += ` AND wt.id = ${event.type_id} `;
            }
            if (event.person_id !== undefined && event.ubigeo_id === undefined && event.type_id === undefined) {
                query = `SELECT w.id,wt.type_name,w.workshop_name,w.address_workshop,w.telephone_workshop,w.web
            FROM workshops w
            INNER JOIN workshop_types wt
            ON w.workshop_type_id=wt.id
            INNER JOIN shop_network_workshop snw
            ON snw.workshop_id=w.id
            WHERE w.active = 1
            AND snw.brand_id = ( SELECT vehicles.brand_id FROM vehicles WHERE vehicles.policy_id = ${event.person_id} LIMIT 1 ) `;
            }
            if (event.person_id !== undefined && event.ubigeo_id !== undefined && event.type_id === undefined) {
                query = `SELECT w.id,wt.type_name,w.workshop_name,w.address_workshop,w.telephone_workshop,w.web
            FROM workshops w
            INNER JOIN workshop_types wt
            ON w.workshop_type_id=wt.id
            INNER JOIN shop_network_workshop snw
            ON snw.workshop_id=w.id
            WHERE w.active = 1
            AND snw.brand_id = ( SELECT vehicles.brand_id FROM vehicles WHERE vehicles.policy_id = ${event.person_id} LIMIT 1 ) 
            AND w.ubigeo_id = ${event.ubigeo_id} `;
            }
            if (event.person_id !== undefined && event.ubigeo_id !== undefined && event.type_id !== undefined) {
                query = `SELECT w.id,wt.type_name,w.workshop_name,w.address_workshop,w.telephone_workshop,w.web
            FROM workshops w
            INNER JOIN workshop_types wt
            ON w.workshop_type_id=wt.id
            INNER JOIN shop_network_workshop snw
            ON snw.workshop_id=w.id
            WHERE wt.id = ${event.type_id} 
            AND w.ubigeo_id = ${event.ubigeo_id}
            AND snw.brand_id = ( SELECT vehicles.brand_id FROM vehicles WHERE vehicles.policy_id = ${event.person_id} LIMIT 1 ) `;
            }
        }
        const [rows] = await pool.query(query, []);
        return {
            rows
        }
    }
}
module.exports = WorkshopService;