import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./footer";
import { DescSect, dataset } from "./DescSect";

// Functions and data
function root(selectors:string) {
    return ReactDOM.createRoot(document.querySelector(selectors)!);
}


let descSectData:[dataset] = [{
    src: "https://static.zerochan.net/Le.Malin.full.2619645.jpg",
    alt: "A cute anime girl",
    text: "I like anime girls",
    float: "right",
    title: "I LOVE ANIME"
}]

// Root definations
const main = root("main");
const footer = root("footer");

// Rendering

main.render(
    <> <p>hello</p>
        { descSectData.map(val => (
            <DescSect src={val.src} alt={val.alt} text={val.text} float={val.float} title={val.title}/>
        )) }
    </>
)

footer.render(<Footer year={2023}/>);