const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

let projects = [
  { id: 1, name: "Project A", tasks: ["Task 1", "Task 2"] },
  { id: 2, name: "Project B", tasks: ["Task 3", "Task 4"] },
];

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.post("/projects", (req, res) => {
  const { name } = req.body;
  const newProject = { id: projects.length + 1, name, tasks: [] };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
