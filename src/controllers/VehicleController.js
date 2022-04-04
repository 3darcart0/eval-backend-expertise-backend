const VehicleService = require("../services/VehicleService");
const Util = require("../utils/ConfigUtil");

module.exports.init = async (event) => {
    try {
        const operation = Util.getOperationRequest(event);
        let result;
        switch (operation) {
            case 'get-my-vehicles':
                let payload = Util.getPayloadRequest(event);
                result = await VehicleService.getMy(payload);
                break;
            default:
                result = Util.getEmptyResponse();
                break;
        }
        return Util.getFormatResponse(result);
    } catch (error) {
        console.log('ocurrió un error en VehicleController: ', error);
        return Util.getErrorResponse();
    }
}