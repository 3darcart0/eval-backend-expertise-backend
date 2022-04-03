const WorkshopTypeService = require("../services/WorkshopTypeService");
const Util = require("../utils/ConfigUtil");

module.exports.init = async (event) => {
    try {
        const operation = Util.getOperationRequest(event);
        let result;
        switch (operation) {
            case 'get-all':
                result = await WorkshopTypeService.getAll();

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