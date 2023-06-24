const Course = require("../../db/models/Course");

exports.fetchCourseById = async (courseId) => {
  const course = await Course.findById(courseId);
  return course;
};

exports.getAllCourses = async (req, res, next) => {
  try {
    // Populate here
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    return next(error);
  }
};

exports.createCourse = async (req, res, next) => {
  try {
    const newCourse = await Course.create(req.body);
    return res.status(201).json(newCourse);
  } catch (error) {
    return next(error);
  }
};

exports.getCourseById = async (req, res, next) => {
  try {
    return res.status(200).json(req.course);
  } catch (error) {
    return next(error);
  }
};

exports.updateCourseById = async (req, res, next) => {
  try {
    await req.course.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.deleteCourseById = async (req, res, next) => {
  try {
    await req.course.deleteOne();
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

// Add extra controllers here

