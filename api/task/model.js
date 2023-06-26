const db = require("../../data/dbConfig");
async function getAll() {
  let allTasks = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select("t.task_description", "t.task_notes", "t.task_completed");
  let mapped = allTasks.map((x) => {
    return {
      ...x,
      task_completed: x.task_completed == 1,
    };
    //x'in içinde project_completed var ama eğer koşul sağlanırsa x'in içindeki false'u ezer. Yazı ile true false olması için, diğer türlü 0 veya 1 gelir
  });
  return mapped;
}
async function getById(task_id) {
  let task = await db("projects").where("project_id", task_id).first();
  task.task_completed = task.task_completed == 1;
  return project;
}
async function create(model) {
  let [task_id] = await db("tasks").insert(model);
  return create(task_id);
}
module.exports = { getAll, create, getById };
