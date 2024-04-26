import React from 'react';
import App from './App.jsx';

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <App headerProp="Header from props..." contentProp=" from props..." />
            </div>
        );
    }
}

export default HelloWorld;