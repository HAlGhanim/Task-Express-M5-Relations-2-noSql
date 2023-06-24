const Tag = require("../../db/models/Tag");

exports.fetchTagById = async (tagId) => {
  const tag = await Tag.findById(tagId);
  return tag;
};

exports.getAllTags = async (req, res, next) => {
  try {
    // Populate here
    const tags = await Tag.find().populate({
      path: "courses",
      select: "name -_id",
    });
    return res.status(200).json(tags);
  } catch (error) {
    return next(error);
  }
};

exports.createTag = async (req, res, next) => {
  try {
    const newTag = await Tag.create(req.body);
    return res.status(201).json(newTag);
  } catch (error) {
    return next(error);
  }
};

exports.getTagById = async (req, res, next) => {
  try {
    return res.status(200).json(req.tag);
  } catch (error) {
    return next(error);
  }
};

exports.updateTagById = async (req, res, next) => {
  try {
    await req.tag.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.deleteTagById = async (req, res, next) => {
  try {
    await req.tag.deleteOne();
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};
