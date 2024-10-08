import {User} from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../services/emailService.js';
import { ownerEmailTemplate } from '../services/templates/course/ownerTemplate.js';
import { userWelcomeEmailTemplate } from '../services/templates/course/userTemplate.js';

// User registration
export const registerUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPassword,
            tnc: req.body.tnc,
        });

        // Dont return user password
        const {password, ...userObject} = await user.toJSON()

        res.status(200).json(userObject);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

// User login
export const LoginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if (!user) {
            return res.status(404).send({
                message: "User does not exist"
            })
        }

        if (!await bcrypt.compare(req.body.password, user.password)) {
            return res.status(400).json({
                message: "Invalid password credentails"
            })
        }

        // NOTE secret should be stored in env file
        const token = jwt.sign({id: user._id}, process.env.JWTTOKENSECRET);
        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true, // set to true if you're using https
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })

        //res.send(token)
        res.send({
            message: 'success'
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

// Get user
export const getUser = async (req, res) => {
    try {
        const cookie = req.cookies['jwt']

        // NOTE secret should be stored in env file
        const claims = jwt.verify(cookie, process.env.JWTTOKENSECRET);

        if (!claims) {
            return res.status(401).send({
                message: "User unauthenticated"
            })
        }

        const user = await User.findOne({_id: claims.id}).populate('courses');

        const {password, ...userObject} = await user.toJSON()

        res.status(200).send(userObject)

    } catch (error) {
        console.error(error.message);
        res.status(401).json({
            message: "Unauthenticated",
            error: error.message
        })
    }
}

// User logout
export const LogoutUser = async (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge: 0});
        res.send({
            message: 'logged_out'
        })


    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

// register course
export const UserCourseRegistration = async (req, res) => {
    try {
        const cookie = req.cookies['jwt']

        // NOTE secret should be stored in env file
        const claims = jwt.verify(cookie, process.env.JWTTOKENSECRET);

        if (!claims) {
            return res.status(401).send({
                message: "User unauthenticated"
            })
        }

        await User.findOneAndUpdate(
            {_id: claims.id},
            { $push: { courses: req.body.courseId } }, // Use $push to add the new course ID to the 'courses' array
            { new: true }, // Set 'new' option to true to return the updated document
        ).then ((updatedUser, error) => {
            if (error) {
                //console.error('Error:', error);
                return res.status(404).send({
                    message: "Error occured during registration",
                    code: '404'
                })
            } else {

            
                // Send email to form owner
                const ownerSubject = 'New Course Registration';
                const ownerMessage = ownerEmailTemplate(updatedUser);
                const ownerEmails = ['aleximenwo@gmail.com'];
                for (const email of ownerEmails) {
                 sendEmail(email, ownerSubject, ownerMessage);
                }

                // Send welcome email to the user
                const userSubject = 'Welcome to the AI Training Course – Unlock Your Career Potential!';
                const userMessage = userWelcomeEmailTemplate(updatedUser);
                sendEmail(updatedUser.email, userSubject, userMessage);

                //console.log('User updated successfully:', updatedUser);
                res.status(200).send(updatedUser)
            }
        })
       
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}