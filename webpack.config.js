const path = require("path");

module.exports = [
    {
        mode: "production",
        entry: "./src/modules/login/index.js",
        output: {
            library: "f",
            filename: "login.min.js",
            path: path.join(__dirname, "./src/static/js")
        }
    },
    {
        mode: "production",
        entry: "./src/modules/admin/index.js",
        output: {
            filename: "admin.min.js",
            path: path.join(__dirname, "./src/static/js")
        }
    },
    {
        mode: "production",
        entry: "./src/modules/client/index.js",
        output: {
            filename: "client.min.js",
            path: path.join(__dirname, "./src/static/js")
        }
    }
];