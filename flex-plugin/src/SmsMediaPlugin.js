import { FlexPlugin } from "flex-plugin";
import React from "react";
import MessageImageComponent from "./MessageImageComponent";

const PLUGIN_NAME = "SmsMediaPlugin";

export default class SmsMediaPlugin extends FlexPlugin {
  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */

  init(flex, manager) {
    flex.MessageBubble.Content.add(<MessageImageComponent key="image" />);
  }
}
