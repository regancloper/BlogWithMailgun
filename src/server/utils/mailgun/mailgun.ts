import * as env from 'dotenv';
import * as mailgunLoader from 'mailgun-js';

env.config();

let mailgun = mailgunLoader({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

const sendEmail = (to: string, from: string, subject: string, content: string) => {
    let data = {
        to,
        from,
        subject,
        text: content
    };
    return mailgun.messages().send(data);
};

export { sendEmail };