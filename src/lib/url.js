/**
 * 
 * @param {String} url 
 * 
 */

function parseUrl(url){
	const data = new URL(url);
	const paramsObject = data.search === "" ? {} : Object.fromEntries(data.search.slice(1).split("&").map(i => i.split("=")));

	return {
		hash: data.hash,
		host: data.host,
		hostname: data.hostname,
		href: data.href,
		origin: data.origin,
		password: data.password,
		pathname: data.pathname,
		port: data.port,
		protocol: data.protocol,
		search: paramsObject,
		username: data.username
	};
}

/**
 * 
 * @param {Object} parsedUrl
 * @param {String} parsedUrl.protocol
 * @param {String} parsedUrl.hostname
 * @param {String} parsedUrl.port
 * @param {String} parsedUrl.pathname
 * @param {Object} parsedUrl.search
 * 
 * @param {Object} searchParams 
 * 
 */

function createUrl(parsedUrl, searchParams){
	const { protocol, hostname, port, pathname, search } = parsedUrl;
	const params = "?" + Object.entries({ ...search, ...searchParams } || {}).map(i => `${i[0]}=${i[1]}`).join("&");
	return protocol + "//" + hostname + port + pathname + (params === "?" ? "" : params) || "";
}

module.exports = { createUrl, parseUrl };