import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div><h3>Welcome {this.props.name}</h3></div>
        )
    }
}

export default Welcome;