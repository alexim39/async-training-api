import express from 'express';
import { 
    registerUser,
    LoginUser,
    getUser,
    LogoutUser,
    UserCourseRegistration
} from '../controllers/user.controller.js'

const usersRouter = express.Router();

// User registration
usersRouter.post('/signup', registerUser);
// User login
usersRouter.post('/signin', LoginUser);
// Get user
usersRouter.get('/user', getUser);
// User logout
usersRouter.post('/signout', LogoutUser);
// User course registration
usersRouter.put('/register-course', UserCourseRegistration);

export default usersRouter;