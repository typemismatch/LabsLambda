console.log('Loading function');

exports.handler = function(event, context) {
    // Let's log everything passed into this function via the event object.
    console.log('Received event:', JSON.stringify(event));
    if (event.Test == 'fail') context.fail("oops");
    context.succeed(true);  // a lazy IF statement, return true except if the passed in eventTest = fail.
};
