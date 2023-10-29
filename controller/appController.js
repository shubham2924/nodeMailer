require('dotenv').config()
const nodemailer = require('nodemailer');
const HTML_TEMPLATE = require('../template/mail-template')

// const { EMAIL, PASSWORD } = require('../env.js')


/** send mail from real gmail account */
const sendEmail = (req, res) => {

    const { name, phoneNumber, pincode, state, city } = req.body;

    let config = {
        service : 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth : {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);


    let message = {
        from : process.env.EMAIL,
        to : process.env.TOEMAIL,
        subject: `New Enquiry from ${name}`,
        html: HTML_TEMPLATE(name, phoneNumber, pincode, state, city)
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("getBill Successfully...!");
}


module.exports = {sendEmail}