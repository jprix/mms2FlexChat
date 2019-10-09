import { FlexPlugin } from "flex-plugin";
import React from "react";
import MessageImageComponent from "./MessageImageComponent";
import ImageModal from "./ImageModal";
import SendMediaComponent from './SendMediaComponent';

const PLUGIN_NAME = "SmsMediaPlugin";

export default class SmsMediaPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */

  init(flex, manager) {
    flex.Actions.registerAction("smsModalControl", (payload, abort) => {
      var event = new Event("smsModalControlOpen");
      event.url = payload.url;
      document.dispatchEvent(event);
      return new Promise((resolve, reject) => {
        resolve();
      });
    });

    flex.MessageBubble.Content.add(<MessageImageComponent key="image" />);

    flex.MainContainer.Content.add(<ImageModal key="imageModal" />, {
      sortOrder: 1
    });

    flex.MessageInput.Content.add(<SendMediaComponent key="sendMedia" manager={manager}/>);
  }
}
