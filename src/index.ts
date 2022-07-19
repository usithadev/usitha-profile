import express from "express";
import { config as envconf } from "dotenv"; envconf();

const app = express();
const PORT:number = Number(process.env.PORT);

app.use("/", express.static(__dirname + "/public/"));

app.get("/", (rec, res) => {
    res.send("Usitha's official profile website.");
});

app.listen(PORT , () => {
    console.log(`Server started at port ${PORT}`);
});