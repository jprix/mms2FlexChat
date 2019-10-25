# mms2FlexChat

Allows end users to send in MMS media over SMS and render within Flex Chat window.

Looking for your Flex Chat Window render MMS media into your Flex Chat UI?

# Steps:

1.  mmsHandler.js:  
    This twilio function will be called everytime a proxy interaction occurs- by using the Proxy Callback URI- the function will check to see if a MMS exists on the SMS message sent in.
    ![image thumbnail](https://raw.githubusercontent.com/jprix/mms2FlexChat/master/screenshots/proxy-callback.png)

You only need to upload/copy this Twilio function and configure your context params and add `request-promise` as a dependency to the Twilio Function configuration.

2. Flex plugin:
   text/javascript: this plugin gets deployed to Flex. It will add the react code reqiured to render a media message inside the Flex chat bubble. See here for deploying a Flex plugin- https://www.twilio.com/docs/flex/deploying-plugins

Demo:
![image thumbnail](https://raw.githubusercontent.com/jprix/mms2FlexChat/master/screenshots/thumbnail.png)

![image modal](https://raw.githubusercontent.com/jprix/mms2FlexChat/master/screenshots/modal.png)
