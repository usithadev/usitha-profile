const path = require("path");

module.exports = {
    mode: "production",
    entry: ["./src/public/scripts/script.js"],
    output: {
        path: path.resolve(__dirname, "src", "public", "scripts"),
        filename: "main.js"
    }
}