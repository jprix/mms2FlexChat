# mms2FlexChat
Allows end users to send in MMS media  over SMS and render within Flex Chat window.

Looking for your Flex Chat Window render MMS media into your Flex Chat UI?  

Steps:

1)  MMS Handler Function:  This twilio function will be called everytime a proxy interaction occurs- by using the Proxy Callback URI- the function will check to see if a MMS exists on the SMS message sent in. 

You only need to upload this function and configure your context params and npm pacakges.

2) Flex plugin:
text/javascript:  this plugin gets deployed to Flex.  It will add the react code reqiured to render a media message inside the Flex chat bubble.  See here for deploying a Flex plugin- https://www.twilio.com/docs/flex/deploying-plugins 

Demo:
