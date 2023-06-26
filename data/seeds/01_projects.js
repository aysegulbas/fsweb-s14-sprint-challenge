/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const defaultProjects = [
  {
    project_name: "React Ekran Tasarlama",
    project_description:
      "React kullanarak bootstrap css dahil edip ekran tasarla",
  },
  {
    project_name: "Kitaplık uygulaması yap",
    project_description: "Flutter ile kitaplık uygulaması",
  },
];
const defaultResources = [
  { resource_name: "Github", resource_description: "Githup repo page" },
  { resource_name: "Google", resource_description: "Google search engine" },
  { resource_name: "Chatgpt", resource_description: "OpenAI chatgpt" },
];
const defaultTasks = [
  {
    task_description: "react form component oluştur",
    task_notes: "bootstrap kullanarak form ekranı tasarla",
    project_id: 1,
  },
  {
    task_description: "flutter arayüz oluştur",
    task_notes: "flutter componentlerinden cardView kullanarak arayüz oluştur",
    project_id: 2,
  },
  {
    task_description: "flutter grid oluştur",
    task_notes:
      "flutter componentlerinden gird kullanarak listeleme ekranı oluştur",
    project_id: 2,
  },
];
//her iki projede de aynı kaynakların hepsini kullanabiliriz
const defaultProjectsResources = [
  { project_id: 1, resource_id: 1 },
  { project_id: 1, resource_id: 2 },
  { project_id: 1, resource_id: 3 },
  { project_id: 2, resource_id: 1 },
  { project_id: 2, resource_id: 2 },
  { project_id: 2, resource_id: 3 },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects_resources").truncate();
  await knex("tasks").truncate();
  await knex("resources").truncate();
  await knex("projects").truncate();
  await knex("projects").insert(defaultProjects);
  await knex("resources").insert(defaultResources);
  await knex("tasks").insert(defaultTasks);
  await knex("projects_resources").insert(defaultProjectsResources);
};
