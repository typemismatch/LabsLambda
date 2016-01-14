# Echo and Lambda

Use these steps and the lambda_echo.js code to hookup a basic Echo -> Lambda example.

### Step 1

Create the Lambda as you normally would and note the ARN of the Lambda function. It is best to use the same AWS account that you're using 
with the Echo so your permissions are a little easier to setup.

### Step 2

Create your Alexa Skill Set, use the Amazon developer portal [https://developer.amazon.com].

Create a basic Intent called Move and create an utterance such as Move Forward, Move, Move Backwards.

Configure the skill set to call your Lambda function created earlier.

### Step 3

When you execute your skill set you should get back the audio response and now you can also see the full JSON file posted by the Alexa
service to your Lambda function.
