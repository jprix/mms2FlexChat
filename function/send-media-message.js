const TokenValidator = require('twilio-flex-token-validator').functionValidator;
const Twilio = require('twilio');

exports.handler = TokenValidator(async function (context, event, callback) {
  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST');
  response.appendHeader('Content-Type', 'application/json');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { to, mediaUrl } = event;

  const client = Twilio(context.ACCOUNT_SID, context.AUTH_TOKEN);
  try {
    const result = await client.messages.create({
      from: context.TWILIO_WHATSAPP_NUMBER,
      to,
      mediaUrl
    });
    console.log('message create result:', result);
    response.setBody(JSON.stringify({ success: true }));
    callback(null, response);
  } catch (error) {
    console.log('error creating message:', error);
    response.setBody(JSON.stringify({ success: false, error }));
    callback(response, null);
  }
});
