# Lambda 1
### Simple Demo Snipit

This will show you what a basic lambda looks like but the trick with this is understanding what's behind the file.

### Setting up

Log into your AWS account and go to the Lambda console. Create a function using ... (TBD) hello-world template.

Paste the code from lambda1.js into your function.

### Save + Test

Save and test your Lambda function, when you do this the first time you'll see a window asking for some dummy data. Right now enter anything you want.
This is saved and used for each future test unless you change it.

In the output window you should see "true" as a result.

### Find the logs!

What you want next is to find the Lambda execution logs, this is where we track exactly what happened and is out first source for debugging.

You'll see a link to "logs" next to succeeded in the execution result. If you can't find that the logs are in CloudWatch (TBD: Link)

In the logs notice the event object is written out, you'll see the true result as well.

### Crash it!

Let's crash our Lambda :)

Click on actions and configure your test event. In the JSON body, add a Test="fail" and run the test. You should now see execution as false
because you passed in a failure condition.

### Next ....

Look for the APIGateway1.MD and follow that to tie into this function.
