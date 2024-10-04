import React from "react";
import LifeOcean from "../assets/LifeOcean.png"; // Verifique se o caminho está correto
import bookMSImage from "../assets/ProjetoGTA.png"; // Verifique se o caminho está correto

const projects = [
  {
    id: 1,
    name: "Life Ocean",
    image: LifeOcean,
    description: "Um projeto que foca na preservação dos oceanos.",
  },
  {
    id: 2,
    name: "Site GTA",
    image: bookMSImage,
    description: "Um site inspirado no jogo GTA.",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        <h2 className="text-4xl font-bold text-center mb-12">Meus Projetos</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full max-w-xs">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
