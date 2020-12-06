

const ajax = require("../../lib/ajax");
const { $, $$ } = require("../../lib/dom");

async function getProblem(id) {
    const API_URL = "https://unity-back.herokuapp.com/api/problems/suggestions";
    const response = await ajax({
        method: "POST",
        url: API_URL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },
        body: {
            "problem_id": id
        }
    });

    if (response.status === 200) {
        return response.data;
    }
};

async function problems() {
    const API_URL = "https://unity-back.herokuapp.com/api/problems/all";
    const response = await ajax({
        method: "GET",
        url: API_URL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
    });

    if (response.status === 200) {
        return response.data;
    }
};

async function statistics() {
    const API_URL = "https://unity-back.herokuapp.com/api/spheres/edu/schools";
    const response = await ajax({
        method: "GET",
        url: API_URL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
    });

    if (response.status === 200) {
        return response.data;
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
    
    /** AUTO REDIRECT */
    if (!localStorage.getItem("token")) {
        location.pathname = "/static/login.html";
    }
    /** AUTO REDIRECT */
    
    console.log(await problems());
    console.log(await statistics());
    // console.log(await getProblem());
};

window.addEventListener("load", init);