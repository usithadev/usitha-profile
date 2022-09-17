const path = require("path");

module.exports = {
    mode: "production",
    entry: ["./src/public/scripts/components.js", "./src/public/scripts/renderer.js"],
    output: {
        path: path.resolve(__dirname, "src", "public", "scripts"),
        filename: "main.js"
    }
}