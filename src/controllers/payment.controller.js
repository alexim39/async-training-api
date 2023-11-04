import {Payment} from '../models/payment.model.js';
import jwt from 'jsonwebtoken';

// paystack update on database
export const paystack = async (req, res) => {
    try {

        const cookie = req.cookies['jwt']

        // NOTE secret should be stored in env file
        const claims = jwt.verify(cookie, process.env.JWTTOKENSECRET);

        if (!claims) {
            return res.status(401).send({
                message: "User unauthenticated"
            })
        }

        const payment = await Payment.create({
            user: req.body.user,
            reference: req.body.reference,
            course: req.body.course,
            status: req.body.status
        });

        //console.log('paystack=',payment)
        res.status(200).json(payment);

      } catch (error) {
        console.error('sent error message',error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

// Get user payment record
export const getUserPaymentRecord = async (req, res) => {
    try {

        const cookie = req.cookies['jwt']

        // NOTE secret should be stored in env file
        const claims = jwt.verify(cookie, process.env.JWTTOKENSECRET);

        if (!claims) {
            return res.status(401).send({
                message: "User unauthenticated"
            })
        }

        

        /* const payment = await Payment.findOne({$or: [
            {user: req.params.userId},
            {course: req.params.courseId}
        ]}) */
        const payment = await Payment.findOne({user: req.params.userId, course: req.params.courseId, status: "success"})
        
        if (payment) {
            res.status(200).json(payment)
        } //user already exists with email AND/OR phone.
        else {
            return res.status(400).send({
                message: "Payment details not found"
            })
        } //no users with that email NOR phone exist.

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}