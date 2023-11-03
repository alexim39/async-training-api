import mongoose from 'mongoose';


/* Schema */
const userSchema = mongoose.Schema(
    {
    
        firstname: {
            type: String,
            required: [true, "Please enter first name"]
        },
        lastname: {
            type: String,
            required: [true, "Please enter last name"]
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Please enter email address"]
        },
        password: {
            type: String,
            required: [true, "Please enter password"]
        },
        tnc: {
            type: Boolean,
            default: false
        },
        status: {
            type: Boolean,
            default: false
        },
        courses: [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Course',
                unique: true
            }
        ]
    },
    {
        timestamps: true
    }
)

/* Model */
export const User = mongoose.model('User', userSchema);