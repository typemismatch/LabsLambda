console.log('Loading function');

var AWS = require('aws-sdk');
var sns = new AWS.SNS();

exports.handler = function(event, context) {
    
    var msg = {
        GCM: JSON.stringify({
            data: {
                message: "IoT Device Active"
            }
        })
    };
    
    var params = {
        MessageStructure: "json",
        Message: JSON.stringify(msg),
        TargetArn: "****YOUR SNS ARN****"
    };
    
    sns.publish(params, function(err,data) {
        if (err) context.fail("Error:" + err);
        else context.succeed(true);
    })
