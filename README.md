# NodeMailer_Gmail_Backend
In this project, we are going to add nodemailer to send mails from gmail account to any email id(s).

## Note:

### Common Errors : Application-specific password required
This error is due to a security layer google uses to protect your account. You are required to create an App Password to use in this instance.

### How to Fix : 
- Login to your google account.
- From the sidebar, click on security
- Scroll down to Signing in with google
- Click on App Passwords to Generate a new App Password
This will generate a 16 character xxxx xxxx xxxx xxxx app-password.

## Create .env file in the root directory and put your own sensitive information.
```
module.exports = {
    PASSWORD=YOUR_APP_PASSWORD
    EMAIL=SENDER_EMAIL
    TOEMAIL=RECEIVER_EMAIL
}
```


