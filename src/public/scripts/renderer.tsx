import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, DescSect, DescSectInterface } from "./components";

function isContains(ele:HTMLElement | Element):boolean {
    if(document.contains(ele)) {
        return true;
    } else {
        return false;
    }
}

const footer = ReactDOM.createRoot(document.querySelector("footer")!);
footer.render(<Footer/>);

let homeinfo:DescSectInterface[] = [
    {
        topic: "ABOUT ME",

        desc: (
            <React.Fragment>
                My name is Usitha Indeewara. I am a programmer. Mostly interested Game development, desktop application developement, web development and artificial intelligence.

                I'm still learning coding and game development from internet(freeCodeCamp, YouTube, etc.). Find me at <a href="https://github.com/usithadev">Github</a>, <a href="https://stackoverflow.com/users/19099302/usitha-indeewara">Stack Overflow.</a>
            </React.Fragment>
        ),

        id: "about",
        more: (<a href="/about"><button className="btn">About me</button></a>)
    },

    {
        topic: "PROJECTS",

        desc: (
            <React.Fragment>
                See my open source projects on <a href="https://github.com/usithadev">GitHub</a>. More interesting projects are coming soon(those are more interesting than the existing projects on my github. Stay tuned.).
            </React.Fragment>
        ),
        
        id: "projects"
    }
];

let AboutRoot = document.querySelector("#abouts");
if(isContains(AboutRoot!)) {
    let root = ReactDOM.createRoot(AboutRoot!);
    root.render(
        <React.Fragment>
            {
                homeinfo.map(val => (
                    <DescSect desc={val.desc} id={val.id} topic={val.topic} more={ (val.hasOwnProperty("more")) ? val.more : <React.Fragment></React.Fragment> }/>
                ))
            }
        </React.Fragment>
    )
}