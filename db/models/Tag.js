const { model, Schema } = require("mongoose");

const tagSchema = new Schema(
  {
    name: { type: String, required: true },
    courses: [{type: Schema.Types.ObjectId, ref: "Course"}]
  },
  { timestamps: true }
);

module.exports = model("Tag", tagSchema);
