const WorkshopTypeService = require("../services/UbigeoService");
const Util = require("../utils/ConfigUtil");

module.exports.init = async (event) => {
    try {
        const operation = Util.getOperationRequest(event);
        let result;
        switch (operation) {
            case 'get-disticts-of-lima':
                result = await WorkshopTypeService.getLima();

                break;
            default:
                result = Util.getEmptyResponse();
                break;
        }
        return Util.getFormatResponse(result);
    } catch (error) {
        console.log('ocurrió un error en WorkshopTypeService: ', error);
        return Util.getErrorResponse();
    }
}