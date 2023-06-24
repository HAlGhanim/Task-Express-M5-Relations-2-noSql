const { model, Schema } = require("mongoose");

const lectureSchema = new Schema(
  {
    name: { type: String, required: true },
    // Add relation here
  },
  { timestamps: true }
);

module.exports = model("Lecture", lectureSchema);
