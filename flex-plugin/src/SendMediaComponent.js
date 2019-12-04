import React from 'react';
import { withTaskContext } from "@twilio/flex-ui";
import Button from './components/Button';

const buttonContainerStyle = {
  display: 'flex',
  'flex-direction': 'horizontal'
}

class UploadComponent extends React.Component {
  baseFunctionUrl = `https://${this.props.manager.serviceConfiguration.runtime_domain}`

  imageUrl = 'https://images.unsplash.com/photo-1452873867668-7325bd9f4438?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'

  videoUrl = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'

  pdfUrl = 'https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf'

  audioUrl = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'

  sendMediaMessage = async (to, mediaUrl) => {
    const { manager } = this.props;
    const sendMediaMessageUrl = `${this.baseFunctionUrl}/send-media-message`;
    const body = {
      Token: manager.store.getState().flex.session.ssoTokenPayload.token,
      to,
      mediaUrl
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(body)
    };
    try {
      const response = await fetch(sendMediaMessageUrl, options);
      const json = await response.json();
      console.log(`Media message sent to ${to}.`, json);
    } catch (error) {
      console.error(`Error sending media message to ${to}.`, error);
    }

  }

  sendMedia = async (mediaUrl, mediaType) => {
    console.log('component props:', this.props);
    const { manager, channelSid, task } = this.props;
    let channel;
    try {
      channel = await manager.chatClient.getChannelBySid(channelSid);
      console.log('Retrieved channel object:', channel);
    } catch (error) {
      console.error('Error getting channel by sid.', error);
      return;
    }
    let messageIndex;
    try {
      messageIndex = await channel.sendMessage('');
      console.log('Message sent with index', messageIndex);
    } catch (error) {
      console.error('Error sending message.', error);
      return;
    }
    const message = channel.messagesEntity.messagesByIndex.get(messageIndex);
    const attributes = {
      media: mediaUrl,
      mediaType
    };
    message.updateAttributes(attributes);
    this.sendMediaMessage(task.attributes.name, mediaUrl);
  }

  render() {
    // TODO: This button should present a file browser so the agent can select
    // the file they want to send. The file should then be uploaded to a publicly
    // accessible location like an Amazon S3 bucket. The URL for the uploaded
    // file would get passed into the sendMedia function.
    return (
      <div style={buttonContainerStyle}>
        <Button key="image-button" label="Send Image" sendMedia={() => { this.sendMedia(this.imageUrl, 'image/jpeg') }}/>
        <Button key="audio-button" label="Send Audio" sendMedia={() => { this.sendMedia(this.audioUrl, 'audio/mpeg') }}/>
        <Button key="video-button" label="Send Video" sendMedia={() => { this.sendMedia(this.videoUrl, 'video/mp4') }}/>
        <Button key="pdf-button" label="Send PDF" sendMedia={() => { this.sendMedia(this.pdfUrl, 'application/pdf') }}/>
      </div>
    )
  }
}

export default withTaskContext(UploadComponent);