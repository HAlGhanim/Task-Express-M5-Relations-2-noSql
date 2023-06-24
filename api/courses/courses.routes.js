const express = require("express");
const router = express.Router();
const {
  fetchCourseById,
  getAllCourses,
  createCourse,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  addTagToCourse,
} = require("./courses.controllers");

router.param("courseId", async (req, res, next, courseId) => {
  try {
    const foundCourse = await fetchCourseById(courseId);
    if (!foundCourse) return next({ status: 404, message: "course not found" });
    req.course = foundCourse;
    return next();
  } catch (error) {
    return next(error);
  }
});

router.get("/", getAllCourses);
router.post("/", createCourse);
router.get("/:courseId", getCourseById);
router.put("/:courseId", updateCourseById);
router.delete("/:courseId", deleteCourseById);
router.post("/:courseId", addTagToCourse);

module.exports = router;
