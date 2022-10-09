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

let changer = <HTMLSpanElement> document.getElementById("change");

const iamas = ["WEB DEVELOPER", "FULL STACK DEVELOPER", "UI DESIGNER", "C++ LOVER", "PROGRAMMER", "GAME DEVELOPER (BEGINNER)"];

let counter = 0;

setInterval(() => {

    changer.textContent = iamas[counter];

    if(iamas[counter] == "GAME DEVELOPER (BEGINNER)") {
        counter = 0;
    } else {
        counter += 1;
    }

}, 2000);