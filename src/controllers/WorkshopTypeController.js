const WorkshopTypeService = require("../services/WorkshopTypeService");
const Util = require("../utils/ConfigUtil");

module.exports.init = async (event) => {
    try {
        const operation = Util.getOperationRequest(event);
        let result;
        if(operation === 'get-all'){
            result = await WorkshopTypeService.getAll();
        }else{
            result = Util.getEmptyResponse();
        }
        return Util.getFormatResponse(result);
    } catch (error) {
        console.log('ocurrió un error en WorkshopTypeService: ', error);
        return Util.getErrorResponse();
    }
}