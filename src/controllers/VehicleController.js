const VehicleService = require("../services/VehicleService");
const Util = require("../utils/ConfigUtil");

module.exports.init = async (event) => {
    try {
        const operation = Util.getOperationRequest(event);
        let result;
        if (operation === 'get-my-vehicles') {
            let payload = Util.getPayloadRequest(event);
            result = await VehicleService.getMy(payload);
        } else {
            result = Util.getEmptyResponse();
        }
        return Util.getFormatResponse(result);
    } catch (error) {
        console.log('ocurrió un error en VehicleController: ', error);
        return Util.getErrorResponse();
    }
}