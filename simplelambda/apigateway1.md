# Setup a REST API

This REST API will use the API Gateway and is a great entry point to our Lambda functions.

### Create your Gateway

Create a new API, give it any name you want. In the screen below I created one and then created two resources.

One for POST and one for GET.

![API Gateway](https://github.com/typemismatch/LabsLambda/blob/master/images/apig_1.png)

### Map your resources to the Lambda function created earlier.

When you create your resource you'll get a screen shot similar to the above. On your integration, pick Lambda and the same
region you created your lambda functions in. Pick the test Lambda function.

If this is the first time you're doing this you'll get an IAM question to grant the required security to the gateway, make sure you follow those steps.

### Test it

Once mapped you'll be able to click on the Test icon and watch your lambda function execute. Publish your API Gateway now and you'll then get an external URL to call to test this.
