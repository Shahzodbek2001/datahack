/**
 * 
 * @param {String} text 
 * 
 */

function isJSON(text){
	try{
		JSON.parse(text);
		return true;
	}catch(e){
		return false;
	}
}

module.exports = isJSON;