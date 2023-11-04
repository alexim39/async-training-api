import mongoose from 'mongoose';


/* Schema */
const courseSchema = mongoose.Schema(
    {
    
        title: {
        type: String,
        required: [true, "Please enter the title of the course"]
        },
        subTitle: {
            type: String,
        },
        subTitleParagraph: {
            type: String,
        },
        coursePitch: {
            type: String,
            required: [true, "Please enter information about the course sales pitch"]
        },
        about: {
            type: String,
            required: [true, "Please enter information about the course"]
        },
        keyLearningOutcome: {
            type: String,
            required: [true, "Please enter the key learning outcome for the course"]
        },
        media: {
            type: String,
        },
        oldPrice: {
            type: Number
        },
        currentPrice: {
            type: Number,
            required: [true, "Please enter course price"]
        },
        panelMsg: {
            type: String,
            default: "Take advantage of this career transformation training"
        },
        duration: {
            type: String,
        },
        selfpaced: {
            type: Boolean,
            required: [true, "Please specify course model - self paced learning"]
        },
        startDate: {
            type: Date,
            required: [true, "Please enter course start date"]
        },
        endDate: {
            type: Date,
            required: [true, "Please enter course end date"]
        },
        isCerficate: {
            type: Boolean,
            default: false
        },
        language: {
            type: String,
            default: "English"
        },
        category: {
            type: String,
            required: true,
            default: "Paid"
        },
        img: {
            type: String,
        }
    
    },
    {
        timestamps: true
    }
)

/* Model */
export const Course = mongoose.model('Course', courseSchema);