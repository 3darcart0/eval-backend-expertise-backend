const Messages = require('./Messages');

class ConfigUtil {
    static getRequest = (event) => {
        let request;
        if (event.body) {
            ({ request } = JSON.parse(event.body));
        } else {
            ({ request } = event);
        }
        return request;
    }

    static getOperation = (event) => {
        let operation;
        if (event.pathParameters.operation) {
            ({ operation } = event.pathParameters);
        } else {
            ({ operation } = null);
        }
        return operation;
    }

    static getPayloadRequest = (event) => {
        const request = this.getRequest(event);
        return request.payload;
    }

    static getOperationRequest = (event) => {
        return this.getOperation(event);
    }

    static getEmptyResponse() {
        return {
            statusCode: 302,
            body: JSON.stringify(
                {
                    response: {
                        payload: null,
                        error: true
                    }
                }
            )
        };
    }

    static getFormatResponse(payload) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                response: {
                    payload,
                    error: false,
                    message: 'Success'
                }
            }),
            headers: {
                'Access-Control-Allow-Origin': process.env.ORIGIN || '*',
                'Access-Control-Allow-Credentials': true,
                'X-Content-Type-Options': 'nosniff',
                'X-XSS-Protection': '1; mode=block',
                'X-Frame-Options': 'SAMEORIGIN',
                'Referrer-Policy': 'no-referrer-when-downgrade',
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
            }
        };
    }

    static getErrorResponse(typeMessage) {
        return {
            statusCode: 500,
            body: JSON.stringify(
                {
                    response: {
                        payload: null,
                        error: true,
                        message: Messages[typeMessage] || 'Error'
                    }
                }
            ),
            headers: {
                'Access-Control-Allow-Origin': process.env.ORIGIN || '*',
                'Access-Control-Allow-Credentials': true,
                'X-Content-Type-Options': 'nosniff',
                'X-XSS-Protection': '1; mode=block',
                'X-Frame-Options': 'SAMEORIGIN',
                'Referrer-Policy': 'no-referrer-when-downgrade',
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
            }
        };
    }
}
module.exports = ConfigUtil;