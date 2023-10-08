import chaptersModel from "../models/chaptersModel.js";

//CreateChapter || POST

export const chapterController = async (req, res) => {
  const { chapterCount, chapterName, verses, summary, summaryImage } = req.body;
  try {
    if (!chapterCount || !chapterName || !verses || !summary || !summaryImage) {
      return res.send({
        message: "Please provide all the detailes",
      });
    }

    const existingChapter = await chaptersModel.findOne({ chapterCount });
    if (existingChapter) {
      return res.status(200).send({
        success: true,
        message: `Chapter is already created please get the chapter`,
      });
    }
    const chapter = await new chaptersModel({
      chapterCount,
      chapterName,
      verses,
      summary,
      summaryImage,
    }).save();
    res.status(201).send({
      success: true,
      message: "Created chapter successfully",
      chapter,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in getting the data",
      error,
    });
  }
};

//GetChapter || POST
export const getChapter = async (req, res) => {
  try {
    const { chapterCount } = req.body;
    if (!chapterCount) {
      return res.send({
        message: "Please provide the chapter No.",
      });
    }
    const data = await chaptersModel.findOne({ chapterCount });
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No such Chapter",
      });
    } else {
      return res.status(200).send({
        success: true,
        message: `Got the chapter`,
        data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting the chapter",
      error,
    });
  }
};

//Update || POST
export const updateChapter = async (req, res) => {
  try {
    const { chapterCount, verses , summary , chapterName, summaryImage } = req.body;
    if (!chapterCount) {
      return res.send({
        message: "Please provide the chapter No.",
      });
    }
    const data = await chaptersModel.findOne({ chapterCount });
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No such Chapter",
      });
    } else {
      const newData = await chaptersModel.findOneAndUpdate(
        { chapterCount },
        {
          $set: {
            chapterName: chapterName,
            verses: verses,
            summary: summary,
            summaryImage: summaryImage,
          },
          $sort:{
            chapterCount:1
          }
        },
        {
          new: true,
          useFindAndModify: false,
        }
        
      );
  
      res.status(200).send({
        success: true,
        message: `Successfully update the chapter`,
        newData,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting the chapter",
      error,
    });
  }
};

//Get || GET
export const getAllChapter = async (req, res) => {
  try {
    const data = await chaptersModel.find({});
    if (data) {
      return res.status(200).send({
        success: true,
        message: `Got the all chapter`,
        data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting the chapter",
      error,
    });
  }
};
