const express = require("express");
const mw = require("./resource-middleware");
const resourceModel = require("./model");
const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    const allData = await resourceModel.getAll();
    res.json(allData);
  } catch (error) {
    next(error);
  }
});

router.post("/", mw.validateResource, async (req, res, next) => {
  try {
    //yanıt gövdesinin modeli zaten readme'de var
    let insertModel = {
      resource_name: req.body.resource_name,
      resource_description: req.body.resource_description,
    };
    const insertedModel = await resourceModel.create(insertModel);
    res.status(201).json(insertedModel);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
