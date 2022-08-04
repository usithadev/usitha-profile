/* 
    Usitha Indeewara's official profile website.
    Copyright (C) 2022  Usitha Indeewara

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import express from "express";
import { config as envconf } from "dotenv"; envconf();

const app = express();
const PORT:number = Number(process.env.PORT);

app.use(express.static(__dirname + "/public/"));

app.get("/about", (rec, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/about/tools", (rec, res) => {
    res.sendFile(__dirname + "/public/tools.html");
});

app.use((rec, res) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.get("/", (rec, res) => {
    res.send("Usitha's official profile website.");
});

app.listen(PORT , () => {
    console.log(`Server started at port ${PORT}`);
});