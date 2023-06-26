//migration dosyasında task description, project_id zorunlu tuttuk, o yüzden post ederken postun geçerliliğine bakmamız lazım.
const taskModel = require("./model");
const projectModel = require("../project/model");
const validateTask = (req, res, next) => {
  try {
    const { task_description, project_id } = req.body;
    if (!task_description || !project_id) {
      res.status(400).json({ message: "Eksik alan var." });
      next();
    }
  } catch (error) {
    next(error);
  }
};
const validateProjectId = async (req, res, next) => {
  try {
    let { project_id } = req.body;
    const isExistId = await projectModel.getById(project_id);
    if (!isExistId) {
      res.status(404).json({ message: "ProjectId yanlış" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { validateTask, validateProjectId };
