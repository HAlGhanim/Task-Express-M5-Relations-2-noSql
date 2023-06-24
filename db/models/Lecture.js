const { model, Schema } = require("mongoose");

const lectureSchema = new Schema(
  {
    name: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course" },
  },
  { timestamps: true }
);

module.exports = model("Lecture", lectureSchema);
