

const ajax = require("../../lib/ajax");
const { $, $$ } = require("../../lib/dom");

const FAVICON_URL = "https://unity.universe.uz/favicon.png";

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

    /** ADD LISTENERS */

    $("#mainbutton").onclick = function () {
        $("#dashboard").style.display = "block";
        $("#report").style.display = "none";
        $("#statistic").style.display = "none";
        $("#setting").style.display = "none";
    }
    $("#staticbutton").onclick = function () {
        $("#dashboard").style.display = "none";
        $("#report").style.display = "none";
        $("#statistic").style.display = "block";
        $("#setting").style.display = "none";
    }
    $("#jalbutton").onclick = function () {
        $("#dashboard").style.display = "none";
        $("#report").style.display = "block";
        $("#statistic").style.display = "none";
        $("#setting").style.display = "none";
    }
    $("#predbutton").onclick = function () {
        // $("#dashboard").style.display = "block";
        // $("#report").style.display = "none";
        // $("#statistic").style.display = "none";
        // $("#setting").style.display = "none";
    }
    $("#settingbutton").onclick = function () {
        $("#dashboard").style.display = "none";
        $("#report").style.display = "none";
        $("#statistic").style.display = "none";
        $("#setting").style.display = "block";
    }

    const statisticsHTML1 = (await statistics()).data.map(i => {
        return `
            <div class="report__table_iteam">
                <p>${i.region_title}</p>
                <p>${i.pupil_count}</p>
                <p>${i.percent_level}</p>
            </div>
        `;
    }).join("");

    $("#statistic1").innerHTML = `
            <div class="report__table_iteam top">
                <p>Регион</p>
                <p>Количество</p>
                <p>%</p>
            </div>
            ${statisticsHTML1}
    `;
    /** ADD LISTENERS */
};

window.addEventListener("load", init);