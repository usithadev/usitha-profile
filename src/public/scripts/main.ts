let changer = <HTMLSpanElement> document.getElementById("change");

const iamas = ["WEB DEVELOPER", "FULL STACK DEVELOPER", "UI DESIGNER", "C++ LOVER", "PROGRAMMER"];

let counter = 0;

setInterval(() => {

    changer.textContent = iamas[counter];

    if(iamas[counter] == "PROGRAMMER") {
        counter = 0;
    } else {
        counter += 1;
    }

}, 2000);

function tg()
{
    setTimeout(() => {
        window.open("https://t.me/usithadevinfo");
    }, 5);
}