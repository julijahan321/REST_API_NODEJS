
import mongoose from 'mongoose';


// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/User';  

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

export default mongoose