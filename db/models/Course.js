const { model, Schema } = require("mongoose");

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    lectures: [{ type: Schema.Types.ObjectId, ref: "Lecture" }],
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  },
  { timestamps: true }
);

module.exports = model("Course", courseSchema);
