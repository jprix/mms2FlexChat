import React, { Component } from "react";
import * as Flex from "@twilio/flex-ui";

const imgContainerStyle = {
  padding: "5px",
  margin: "0px"
};

class MessageImageComponent extends Component {
  render() {
    if (this.props.message.source.state.attributes.media) {
      return (
        <div style={{ imgContainerStyle }}>
          <img
            src={this.props.message.source.state.attributes.media}
            alt="MMS"
            width="150px"
            onClick={() =>
              Flex.Actions.invokeAction("smsModalControl", {
                url: this.props.message.source.state.attributes.media
              })
            }
          />
        </div>
      );
    }
    return <div />;
  }
}

export default MessageImageComponent;
