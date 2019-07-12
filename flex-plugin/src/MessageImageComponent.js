import React, { Component } from "react";

const imgContainerStyle = {
  padding: "5px",
  margin: "0px"
};

class MessageImageComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.message.source.state.attributes.media) {
      return (
        <div style={{ imgContainerStyle }}>
          <img
            src={this.props.message.source.state.attributes.media}
            alt="MMS"
            width="100%"
          />
        </div>
      );
    }
    return <div />;
  }
}

export default MessageImageComponent;
