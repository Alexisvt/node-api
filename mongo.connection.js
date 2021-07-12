import mongoose from 'mongoose';

async function connect() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to mongodb');
    console.error(error);
  }
}

export default connect;