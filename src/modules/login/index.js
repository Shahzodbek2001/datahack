

const ajax = require("../../lib/ajax");
const { $, $$ } = require("../../lib/dom");

const API_HOST = "https://unity-back.herokuapp.com/api/users/save";
const FAVICON_URL = "https://unity.universe.uz/favicon.png";

async function login(user) {
    const response = await ajax({ 
        method: "POST", 
        url: API_HOST, 
        headers: {
            "Content-Type": "application/json"
        },
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
        localStorage.setItem("type", response.data.admin ? "admin" : "user");
        localStorage.setItem("userid", response.data.user_id);
        localStorage.setItem("token", response.data.token);
        location.pathname = "/static/admin.html";
    }
};

async function init() {
    /** FAVICON INIT */
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = FAVICON_URL;
    favicon.type = "image/png";
    document.head.appendChild(favicon);
    /** FAVICON INIT */

    /** FUNCTION LOGIN */
    window.login = login;
    /** FUNCTION LOGIN */
};

window.addEventListener("load", init);