const { model, Schema } = require("mongoose");

const tagSchema = new Schema(
  {
    name: { type: String, required: true },
    // Add relations here
  },
  { timestamps: true }
);

module.exports = model("Tag", tagSchema);
