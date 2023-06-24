const express = require("express");
const router = express.Router();
const {
  fetchLectureById,
  getAllLectures,
  createLecture,
  getLectureById,
  updateLectureById,
  deleteLectureById,
} = require("./lectures.controllers");

router.param("lectureId", async (req, res, next, lectureId) => {
  try {
    const foundLecture = await fetchLectureById(lectureId);
    if (!foundLecture)
      return next({ status: 404, message: "lecture not found" });
    req.lecture = foundLecture;
    return next();
  } catch (error) {
    return next(error);
  }
});

router.get("/", getAllLectures);
router.post("/", createLecture);
router.get("/:lectureId", getLectureById);
router.put("/:lectureId", updateLectureById);
router.delete("/:lectureId", deleteLectureById);
// Add routes to create relations here

module.exports = router;
