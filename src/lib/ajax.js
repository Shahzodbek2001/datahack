

const { createUrl, parseUrl } = require("./url");
const isJSON = require("./isjson");

/**
 * 
 * @param {Object} config
 * @param {String} config.method
 * @param {String} config.url
 * @param {String} config.async
 * @param {Object} config.headers
 * @param {String} config.headers.
 * @param {Object} config.params
 * @param {Any} config.body
 * 
 * @param {Function|Null} callback
 *  
 */

function ajax(config, callback = null) {
    const _f = (callbackin) => {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            if(xhttp.readyState === 4){
                callbackin({
                    data: isJSON(xhttp.response) ? JSON.parse(xhttp.response) : xhttp.response,
                    status: xhttp.status
                });
            }
        }
        
        xhttp.open(config.method, createUrl(parseUrl(config.url), config.params), config.async);
        Object.entries(config.headers || {}).forEach(i => xhttp.setRequestHeader(i[0], i[1]));
        xhttp.send(typeof config.body === "object" ? JSON.stringify(config.body) : config.body);
    }

    return typeof callback === "function" ? _f(callback) : new Promise((res, rej) => _f((result) => res(result)))
};

module.exports = ajax;