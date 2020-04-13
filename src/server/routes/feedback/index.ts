import * as express from 'express';
import { sendEmail } from '../../utils/mailgun/mailgun';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        await sendEmail('regan.c.loper@gmail.com', req.body.email, req.body.subject, req.body.message);
        res.json({ message: 'Email sent!' })
    } catch (e) {
        console.log(e);
        res.status(500);
    }
});

export default router;