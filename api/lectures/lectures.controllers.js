const Lecture = require("../../db/models/Lecture");
const Course = require("../../db/models/Course");

exports.fetchLectureById = async (lectureId) => {
  const lecture = await Lecture.findById(lectureId);
  return lecture;
};

exports.getAllLectures = async (req, res, next) => {
  try {
    // Populate Here
    const lectures = await Lecture.find().populate({
      path: "course",
      select: "name -_id",
    });
    return res.status(200).json(lectures);
  } catch (error) {
    return next(error);
  }
};

exports.createLecture = async (req, res, next) => {
  try {
    const newLecture = await Lecture.create(req.body);
    return res.status(201).json(newLecture);
  } catch (error) {
    return next(error);
  }
};

exports.getLectureById = async (req, res, next) => {
  try {
    return res.status(200).json(req.lecture);
  } catch (error) {
    return next(error);
  }
};

exports.updateLectureById = async (req, res, next) => {
  try {
    await req.lecture.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.deleteLectureById = async (req, res, next) => {
  try {
    await req.lecture.deleteOne();
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

// Add extra controllers here

exports.addToCourse = async (req, res, next) => {
  try {
    console.log(req.lecture);
    await req.lecture.updateOne(req.body);
    await Course.findByIdAndUpdate(req.body.course, {
      $push: { lectures: req.lecture._id },
    });
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
