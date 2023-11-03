import express from 'express';
import { getCourses, getCourse, postCourse, updateCourse, deleteCourse } from '../controllers/course.controller.js'

const coursesRouter = express.Router();


// Get all courses
coursesRouter.get('/', getCourses)
// Get a course
coursesRouter.get('/:id', getCourse)
// Post a course
coursesRouter.post('/', postCourse)
// Update a course
coursesRouter.put('/:id', updateCourse)
// Delete a course
coursesRouter.delete('/:id', deleteCourse)

export default coursesRouter;