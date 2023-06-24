const express = require("express");
const router = express.Router();
const {
  fetchTagById,
  getAllTags,
  createTag,
  getTagById,
  updateTagById,
  deleteTagById,
} = require("./tags.controllers");

router.param("tagId", async (req, res, next, tagId) => {
  try {
    const foundTag = await fetchTagById(tagId);
    if (!foundTag) return next({ status: 404, message: "tag not found" });
    req.tag = foundTag;
    return next();
  } catch (error) {
    return next(error);
  }
});

router.get("/", getAllTags);
router.post("/", createTag);
router.get("/:tagId", getTagById);
router.put("/:tagId", updateTagById);
router.delete("/:tagId", deleteTagById);

module.exports = router;
