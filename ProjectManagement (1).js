import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectManagement = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project A", tasks: ["Task 1", "Task 2"], image: "https://via.placeholder.com/150" },
    { id: 2, name: "Project B", tasks: ["Task 3", "Task 4"], image: "https://via.placeholder.com/150" },
  ]);

  const addProject = () => {
    const newProject = { 
      id: projects.length + 1, 
      name: `Project ${String.fromCharCode(65 + projects.length)}`, 
      tasks: [], 
      image: "https://via.placeholder.com/150" 
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Project Management Tool</h1>
      <Button onClick={addProject} className="my-2">Add Project</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent>
              <img src={project.image} alt={project.name} className="w-full h-32 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold mt-2">{project.name}</h2>
              <ul className="list-disc ml-4">
                {project.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
