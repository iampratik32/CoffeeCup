const responses = require('./responses')
const transporter = require('../config/mailer')

exports.sendEmail = async (email, subject, data) => {
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: subject,
        html: data
    }

    await transporter.sendMail(mailOptions, async (err, data) => {
        if (err) responses.serverError(res, err)
    })
}