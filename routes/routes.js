import express from "express";
import {
  registerController,
  loginControler,
} from "../controllers/adminController.js";
import {
  chapterController,
  getChapter,updateChapter, getAllChapter
} from "../controllers/chapterController.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginControler);

router.post("/create-chapter", chapterController);

router.post("/get-chapter", getChapter);

router.post("/update-chapter", updateChapter)

router.get("/chapter", updateChapter)

export default router;
