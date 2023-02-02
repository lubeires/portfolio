import { FaGithub } from "react-icons/fa";
import {
  Python,
  Flask,
  Django,
  NodeJS,
  Express,
  SQLite,
  ReactJS,
  Bootstrap,
  Javascript,
} from "./Technologies";

const githubBaseUrl = "https://www.github.com/plhrsl/";

const projects = [
  {
    title: "know your taste",
    description:
      "Visualizador de top músicas, artistas e gêneros do Spotify; e gerador automático de playlists.",
    repoUrl: githubBaseUrl + "knowyourtaste",
    webSiteUrl: "https://knowyourtaste.onrender.com",
    technologies: [<Javascript />, <ReactJS />, <NodeJS />, <Express />],
  },
  {
    title: "pass manager",
    description: "Gerenciador e gerador de senhas seguras.",
    repoUrl: githubBaseUrl + "pass-manager",
    webSiteUrl: "https://passmanager.onrender.com",
    technologies: [
      <Javascript />,
      <Bootstrap />,
      <Python />,
      <Django />,
      <SQLite />,
    ],
  },
  {
    title: "habit tracker",
    description: "Monitorador de hábitos semanais.",
    repoUrl: githubBaseUrl + "habit-tracker",
    webSiteUrl: "https://habit-tracker-l6h0.onrender.com",
    technologies: [
      <Javascript />,
      <Bootstrap />,
      <Python />,
      <Flask />,
      <SQLite />,
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <h2>alguns dos meus projetos</h2>
      <div id="projects-container">
        {projects.map((project) => (
          <div className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="lower-container">
              <div className="tech-container">
                {project.technologies?.map((tech) => tech)}
              </div>
              <div className="links-container">
                <a
                  href={project.repoUrl}
                  rel="noreferrer"
                  target="_blank"
                  className="button repo"
                >
                  <FaGithub className="github" />
                  repositório
                </a>
                <a
                  href={project.webSiteUrl}
                  rel="noreferrer"
                  target="_blank"
                  className="website"
                >
                  <img
                    src={require(`../static/projects-previews/${project.title
                      .split(" ")
                      .join("-")}.png`)}
                    alt="project preview"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
