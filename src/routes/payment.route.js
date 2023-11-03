import express from 'express';
import { 
    paystack,
    getUserPaymentRecord
} from '../controllers/payment.controller.js'

const paymentsRouter = express.Router();

// update paystack payment on databse
paymentsRouter.post('/paystack', paystack);

// get user payment record
paymentsRouter.get('/paystack/:userId/:courseId', getUserPaymentRecord)

export default paymentsRouter;