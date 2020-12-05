

const ajax = require("../../lib/ajax");
const { $, $$ } = require("../../lib/dom");

const API_HOST = "";
const API_PORT = 80;
const FAVICON_URL = "https://unity.universe.uz/favicon.png";

async function init() {
    /** FAVICON INIT */
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = FAVICON_URL;
    favicon.type = "image/png";
    $("head").appendChild(favicon);
    /** FAVICON INIT */
};

async function login(user) {
    const response = await ajax({ 
        method: "POST", 
        url: "https://host/api/users/save", 
        body: {
            id: user.id,
            hash: user.hash,
            authdate: user.auth_date,
            username: user.username,
            lastname: user.last_name,
            firstname: user.first_name,
            photourl: user.photo_url
        } 
    });

    if (response.status === 200) {
        alert("hello")
    }
};

window.addEventListener("load", init);