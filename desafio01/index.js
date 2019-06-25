const express = require("express");

const server = express();

server.use(express.json());

//variaveis
let cont = 0;
const projects = [];

//funcao global "contador"
function contRequest(req, res, next) {
  cont++;
  if (cont === 1) {
    console.log(`${cont} Requisição`);
  } else {
    console.log(`${cont} Requisições`);
  }
  next();
}

//verifica projeto
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return res.status(400).json({ error: "Project not found" });
  }

  next();
}

//global middleware
server.use(contRequest);

//get
server.get("/projects", (req, res) => {
  return res.json(projects);
});

//post
server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    task: []
  };

  projects.push(project);

  return res.json(projects);
});

//update
server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.title = title;

  return res.json(project);
});

//delete
server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id === id);

  projects.splice(projectIndex, 1);

  return res.send();
});

//post tasks
server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.task.push(title);

  return res.json(project);
});

server.listen(3000);
