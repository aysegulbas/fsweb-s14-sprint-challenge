// `Resource` modeli buraya
const db = require("../../data/dbConfig");
async function getAll() {
  let allResources = await db("resources");

  return allResources;
}
async function getById(resource_id) {
  let resource = await db("resources")
    .where("resource_id", resource_id)
    .first();
  return resource;
}
async function getByResourceName(resource_name) {
  let resource = await db("resources")
    .where("resource_name", resource_name)
    .first();
  return resource;
}
async function create(model) {
  let [resource_id] = await db("resources").insert(model);
  return getById(resource_id);
}
module.exports = { getAll, create, getById, getByResourceName };
