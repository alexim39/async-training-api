import {Course} from '../models/course.model.js';

// Get all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(courses);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

// Get a course
export const getCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findById(id);
        res.status(200).json(course);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

// Post a course
export const postCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(200).json(course);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

// Update a course
export const updateCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(id, req.body);
        if (!course) {
            return res.status(404).json({
                message: `Course not found`
            })
        }
        const updatedCourse = await Course.create(req.body);
        res.status(200).json(updatedCourse);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

// Delete a course
export const deleteCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({
                message: `Course not found`
            })
        }
        res.status(200).json(course);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        })
    }
}