function $(selector) {
    return document.querySelector(selector);
};

function $$(selectors) {
    return document.querySelectorAll(selectors);
};

module.exports = { $, $$ };