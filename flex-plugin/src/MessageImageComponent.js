import React, { Component } from "react";
import * as Flex from "@twilio/flex-ui";

const imgContainerStyle = {
  padding: "5px",
  margin: "0px"
};

const audioPlayerStyle = {
  width: "100%"
};

class MessageImageComponent extends Component {
  renderImage = (media) => {
    return (
      <img
        src={media}
        alt="MMS"
        width="150px"
        onClick={() =>
          Flex.Actions.invokeAction("smsModalControl", {
            url: media
          })
        }
      />
    );
  }

  renderAudioPlayer = (media, mediaType) => {
    return (
      <React.Fragment>
        <audio style={audioPlayerStyle} controls>
          <source src={media} type={mediaType} />
        </audio>
        <a href={media} target="_blank">
          Full Size Player
        </a>
      </React.Fragment>
    );
  }

  renderPdfViewer = (media) => {
    return (
      <React.Fragment>
        <iframe title='PDF Preview' src={media} width="100%" />
        <a href={media} target="_blank">
          Full Size Document
        </a>
      </React.Fragment>
    )
  }

  renderVideoPlayer = (media, mediaType) => {
    return (
      <React.Fragment>
        <video width="100%" controls>
          <source src={media} type={mediaType} />
        </video>
        <a href={media} target="_blank">
          Full Size Player
        </a>
      </React.Fragment>
    )
  }

  render() {
    const messageAttributes = this.props.message.source.state.attributes;
    const { media, mediaType } = messageAttributes;
    if (media) {
      let element;
      switch (mediaType) {
        case 'image/jpeg':
          element = this.renderImage(media);
          break;
        case 'audio/mpeg':
          element = this.renderAudioPlayer(media, mediaType);
          break;
        case 'application/pdf':
          element = this.renderPdfViewer(media);
          break;
        case 'video/mp4':
          element = this.renderVideoPlayer(media, mediaType);
          break;
        default:
          element = <div />;
      }
      return (
        <div style={{ imgContainerStyle }}>
          {element}
        </div>
      );
    }
    return <div />;
  }
}

export default MessageImageComponent;
