import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
    minlength: 4,
    maxlength: 150,
  },
  body: {
    type: String,
    required: "Title is required",
    minlength: 4,
    maxlength: 2000,
  }
})

export default mongoose.model('Post', postSchema);