import { model, Schema } from 'mongoose';

const contentSchema = new Schema({
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
});

const topicSchema = new Schema({
  topic: {
    type: String,
    required: [true, 'Topic is required'],
  },
  contents: {
    type: [contentSchema],
    required: [true, 'Content is required'],
  },
});

const courseSchema = new Schema({
  courseCode: {
    type: Number,
    required: [true, 'Course code is required'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Image url is required'],
  },
  videoUrl: {
    type: String,
    required: [true, 'Video url is required'],
  },
  quizUrl: {
    type: String,
    required: [true, 'Quiz url is required'],
  },
  topics: {
    type: [topicSchema],
    required: [true, 'Topics are required'],
  },
});

export const Course = model('Course', courseSchema, 'courses');
