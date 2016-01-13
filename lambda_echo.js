var http = require('https');
console.log('Loading function');

exports.handler = function(event, context) {
    console.log('Main handler running ...');
    console.log('Received event:', JSON.stringify(event, null, 2));
    var response = {
      "version": "1.0",
      "response": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "Your lambda function executed!"
        },
        "shouldEndSession": true
      }
};

// The intent value is defined in your Alexa Skill Set.
var intent = event.request.intent.name;

if (intent == "Move")
{
    // do something with our dummy Move event.
    // send a verbal response back to the echo.
    context.succeed(response);
}
else context.fail("No intents found");
   
};
