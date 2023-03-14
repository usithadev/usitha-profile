import React, { ReactNode } from "react";

class Footer extends React.Component {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                Copyright © 2023 Usitha Indeewara. All rights reserved.
            </React.Fragment>
        );
    }
}

interface DescSectInterface { id: string; topic:string; desc:string | ReactNode, more?:ReactNode | JSX.Element | JSX.Element[] }


/**
 * The description sets. Example: The ABOUT MR section and the PROJECTS section in the homepage
 */
class DescSect extends React.Component<DescSectInterface, {}> {
    render(): React.ReactNode {
        return (
            <section id={this.props.id} className="absec">

                <h1><u>{this.props.topic}</u></h1>
                <p>{this.props.desc}</p>

                <React.Fragment>
                    {
                        (this.props.more !== undefined) ? this.props.more : <React.Fragment></React.Fragment>
                    }
                </React.Fragment>

            </section>
        )
    }
}

export { Footer, DescSect, DescSectInterface };
