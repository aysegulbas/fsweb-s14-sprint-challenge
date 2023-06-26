const db = require("../../data/dbConfig");
async function getAll() {
  let allProjects = await db("projects");
  let mapped = allProjects.map((x) => {
    return {
      ...x,
      project_completed: x.project_completed == 1,
    };
    //x'in içinde project_completed var ama eğer koşul sağlanırsa x'in içindeki false'u ezer. Yazı ile true false olması için, diğer türlü 0 veya 1 gelir
  });
  return mapped;
}
async function getById(project_id) {
  let project = await db("projects").where("project_id", project_id).first();
  project.project_completed = project.project_completed == 1;
  return project;
}
async function create(model) {
  let [project_id] = await db("projects").insert(model);
  return create(project_id);
}
module.exports = { getAll, create, getById };
