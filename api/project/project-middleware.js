//migration dosyasında project name'i zorunlu tuttuk, o yüzden post ederken postun geçerliliğine bakmamız lazım.
const validateProject = (req, res, next) => {
  try {
    let { project_name } = req.body;
    if (!project_name) {
      res.status(400).json({ message: "Proje ismi eksik" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { validateProject };
