import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button style={{fontSize: '1rem'}} onClick={this.props.sendMedia}>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;
