import React from "react";

class Alink extends React.Component<any, any> {
    render() {
        return (
            <a href={this.props.href} rel="noopener noreferrer" target="_blank">
                {this.props.children}
            </a>
        )
    }
}

export default Alink;