import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: "Hello"
        }
    }
    render() {
        return (
            <div><h3>{this.state.welcomeMessage}, {this.props.name}</h3></div>
        )
    }
}

export default Welcome;