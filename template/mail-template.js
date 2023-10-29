// an email template that can be used with Nodemailer to send emails

const HTML_TEMPLATE = (name, phoneNumber, pincode, state, city) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Customer Enquiry</title>
          <style>
          </style>
        </head>
        <body>
          <h1>Customer Details</h1>
          <ul>
          <li>Name : ${name}</li>
          <li>Phone Number : ${phoneNumber}</li>
          <li>Pincode : ${pincode ? pincode : `NA`}</li>
          <li>State : ${state ? state: `NA`}</li>
          <li>City : ${city ? city : `NA`}</li>
          </ul>
        </body>
      </html>
    `;
  }
  
  module.exports = HTML_TEMPLATE;