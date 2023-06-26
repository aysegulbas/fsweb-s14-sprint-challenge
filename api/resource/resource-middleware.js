//migration dosyasında resources name'i hem zorunlu hem de unique tuttuk, o yüzden post ederken postun geçerliliğine bakmamız lazım.
const resourceModel = require("./model");
const validateResource = async (req, res, next) => {
  try {
    const { resource_name } = req.body;
    if (!resource_name) {
      res.status(400).json({ message: "Kaynak ismi eksik" });
      next();
    } else {
      const isExist = await resourceModel.getByResourceName(resource_name);
      if (isExist) {
        res.status(400).json({ message: "Yeni bir isim giriniz" });
      } else {
        next();
      }
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { validateResource };
