# Lambda + Phone Push Example

Send a push notification to an Android phone using Google's GCM, AWS SNS and AWS Lambda.

### Setup your SNS Notification

You need to create an Application SNS end-point. To do this under AWS SNS, create a new application for your platform. In this example I used
Google's GCM platform but the same logic applies to an iOS APN platform.

Once you have the Application created, you need to subscribe your physical device to the platform (another example of that coming soon). Once your 
device is registered you'll see a token + Endpoint ARN listed in the application details.

Make a note of the Endpoint ARN - when you send push messages they are sent to the individual ARN and not the Application ARN.

### Setup the Lambda

Take the example code from pushexample.js and create your new lambda function, use the hello-world template and just replace the code.
Modify the code to have your Endpoint ARN where specified.

### Testing

You can now test this by invoking your Lambda either directly via the test feature or by setting up an API Gateway resource and calling that.
