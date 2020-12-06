

const ajax = require("../../lib/ajax");
const { $, $$ } = require("../../lib/dom");

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
    console.log(await problems());
    console.log(await statistics());
};

window.addEventListener("load", init);