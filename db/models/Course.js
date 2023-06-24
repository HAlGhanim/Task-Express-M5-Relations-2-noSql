const { model, Schema } = require("mongoose");

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    // Add relations here
  },
  { timestamps: true }
);

module.exports = model("Course", courseSchema);
