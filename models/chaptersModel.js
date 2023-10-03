import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema(
  {
    chapterCount: {
      type: Number,
      require: true,
      trim: true,
    },
    chapterName: {
      type: String,
      require: true,
      trim: true,
    },
    verses: {
      type: Array,
    },
    summary: {
      type: String,
    },
    summaryImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Chapter", chapterSchema);
