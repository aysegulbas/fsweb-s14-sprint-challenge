const express = require("express");
const mw = require("./task-middleware");
const taskModel = require("./model");
const router = express.Router;
router.get("/", async (req, res, next) => {
  try {
    const allData = await taskModelModel.getAll();
    res.json(allData);
  } catch (error) {
    next(error);
  }
});
router.post(
  "/",
  mw.validateTask,
  mw.validateProjectId,
  async (req, res, next) => {
    try {
      //yanıt gövdesinin modeli zaten readme'de var
      let insertModel = {
        task_description: req.body.task_description,
        task_notes: req.body.task_notes,
        project_id: req.body.project_id,
        task_completed: req.body.task_completed,
      };
      const insertedModel = await taskModel.create(insertModel);
      res.status(201).json(insertedModel);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
