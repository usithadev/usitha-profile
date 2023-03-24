interface dataset {src:string; alt:string; text:string; float:any | string; title:null|string}

function DescSect(props:dataset) {
    return (
        <div id="container">
            <img className="img" src={props.src} alt={props.alt} style={{float: props.float}}/>
            <span className="cen">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </span>
        </div>
    )
}

export { dataset, DescSect };