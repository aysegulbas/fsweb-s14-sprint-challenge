//  `/api/projects` router buraya
const express = require("express");
const mw = require("./project-middleware");
const projectModel = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allData = await projectModel.getAll();
    res.json(allData);
  } catch (error) {
    next(error);
  }
});

router.post("/", mw.validateProject, async (req, res, next) => {
  try {
    //yanıt gövdesinin modeli zaten readme'de var
    let insertModel = {
      project_name: req.body.project_name,
      project_description: req.body.project_description,
      project_completed: req.body.project_completed,
    };
    const insertedModel = await projectModel.create(insertModel);
    res.status(201).json(insertedModel);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
