import * as express from 'express';

import authRouter from './auth';
import apiRouter from './api';
import donateRouter from './donate';
import feedbackRouter from './feedback';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/api', apiRouter);
router.use('/donate', donateRouter);
router.use('/feedback', feedbackRouter);


export default router;