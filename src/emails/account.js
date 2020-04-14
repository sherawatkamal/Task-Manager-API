const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kamalsherawat007@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome ${name}, Let me know how can I help you ?`
    })
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kamalsherawat007@gmail.com',
        subject: 'Regarding deleting account',
        text: `Hey ${name} , Was there any way we could be better ?. Please let us know.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}