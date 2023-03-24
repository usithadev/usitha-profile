import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./footer";
import { DescSect } from "./DescSect";
import descSectData from "./data";

// Functions and data
function root(selectors:string) {
    return ReactDOM.createRoot(document.querySelector(selectors)!);
}

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