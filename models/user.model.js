import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: String, // Corrected type to "String"
        required: true // Corrected "require" to "required"
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

export default User;
