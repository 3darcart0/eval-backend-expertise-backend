const WorkshopService = require("../services/WorkshopService");
const Util = require("../utils/ConfigUtil");

module.exports.init = async (event) => {
    try {
        const operation = Util.getOperationRequest(event);
        let result;
        switch (operation) {
            case 'get-filter':
                let payload = Util.getPayloadRequest(event);
                result = await WorkshopService.getFilter(payload);
                break;
            default:
                result = Util.getEmptyResponse();
                break;
        }
        return Util.getFormatResponse(result);
    } catch (error) {
        console.log('ocurrió un error en WorkshopService: ', error);
        return Util.getErrorResponse();
    }
}