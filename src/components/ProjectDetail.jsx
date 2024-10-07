import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: "Life Ocean",
    image: "caminho/para/LifeOcean.png", 
    github: "https://pedroggutierre.github.io/LifeOceanFront/",
    description: "Um projeto que foca na preservação dos oceanos.",
  },
  {
    id: 2,
    name: "Site GTA",
    image: "caminho/para/ProjetoGTA.png", 
    github: "https://pedroggutierre.github.io/ProjetoGTA/",
    description: "Um site inspirado no jogo GTA.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <h2>Projeto não encontrado</h2>;

  return (
    <div className="bg-black text-white py-20" style={{ position: 'relative' }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {}
        <Link 
          to="/projects" 
          className="absolute top-4 left-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          Voltar
        </Link>

        {}
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
        <p className="text-gray-400 mb-4">{project.description}</p>
        <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">
          Visitar GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
