import express from 'express';
import mongoose from 'mongoose';
import dotenv  from "dotenv"
import cors from 'cors';
import cookieParser from 'cookie-parser';
import coursesRouter from './src/routes/course.route.js';
import usersRouter from './src/routes/user.route.js';
import paymentsRouter from './src/routes/payment.route.js';


const port = process.env.PORT || 3000;
const app = express();
app.use(express.json()); // Use json middleware
app.use(express.urlencoded({extended: false})); // Use formdata middleware
dotenv.config()
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: [
        'http://localhost:4200', 
        'http://training.async.ng', 
        'http://async.ng', 
        'https://training.async.ng', 
        'https://async.ng',
        'www.async.ng',
        'www.trainning.async.ng'
    ]
}));

/* Routes */
app.get('/', (req, res) => res.send('Node server is up and running'));
app.use('/courses', coursesRouter);
app.use('/users', usersRouter);
app.use('/payments', paymentsRouter);


/* DB connection */
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ww1ixp8.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`)
.then(() => {
    // Application Starts Only when MongoDB is connected
    console.log('Connected to mongoDB')
    app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:${port}`)
    })
}).catch((error) => {
    console.error('Error from mongoDB connection ', error)
})