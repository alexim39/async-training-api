import mongoose from 'mongoose';


/* Schema */
const paymentSchema = mongoose.Schema(
    {
    
        reference: {
            type: String,
            required: [true, "Please submit transaction reference"],
            unique: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
        },
        course: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Course',
        },
        status: {
            type: String
        }
        
    },
    {
        timestamps: true
    }
)

/* Model */
export const Payment = mongoose.model('Payment', paymentSchema);