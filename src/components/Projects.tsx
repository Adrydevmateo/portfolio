import "@css/project.css";
import projectList from "@data/project";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {projectList.map((project) => (
        <div className="project" key={project.id}>
          <div className="project__head">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <title>Folder</title>
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"
                />
              </svg>
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer">
                  {project.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <title>Arrow</title>
                    <path
                      fill="currentColor"
                      d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
                    />
                  </svg>
                </a>
              ) : (
                project.name
              )}
            </h3>
            {project.repository ? (
              <a href={project.repository} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                >
                  <title>Git</title>
                  <path
                    fill="currentColor"
                    d="m6.793 1.207l.353.354zM1.207 6.793l-.353-.354zm0 1.414l.354-.353zm5.586 5.586l-.354.353zm1.414 0l-.353-.354zm5.586-5.586l.353.354zm0-1.414l-.354.353zM8.207 1.207l.354-.353zM6.44.854L.854 6.439l.707.707l5.585-5.585zM.854 8.56l5.585 5.585l.707-.707l-5.585-5.585zm7.707 5.585l5.585-5.585l-.707-.707l-5.585 5.585zm5.585-7.707L8.561.854l-.707.707l5.585 5.585zm0 2.122a1.5 1.5 0 0 0 0-2.122l-.707.707a.5.5 0 0 1 0 .708zM6.44 14.146a1.5 1.5 0 0 0 2.122 0l-.707-.707a.5.5 0 0 1-.708 0zM.854 6.44a1.5 1.5 0 0 0 0 2.122l.707-.707a.5.5 0 0 1 0-.708zm6.292-4.878a.5.5 0 0 1 .708 0L8.56.854a1.5 1.5 0 0 0-2.122 0zm-2 1.293l1 1l.708-.708l-1-1zM7.5 5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 4.5zM7.5 4a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 3zm0-1A1.5 1.5 0 0 0 6 4.5h1a.5.5 0 0 1 .5-.5zm.646 2.854l1.5 1.5l.707-.708l-1.5-1.5zM10.5 8a.5.5 0 0 1-.5-.5H9A1.5 1.5 0 0 0 10.5 9zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 12 7.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 6zm0-1A1.5 1.5 0 0 0 9 7.5h1a.5.5 0 0 1 .5-.5zM7 5.5v4h1v-4zm.5 5.5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 12zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 10.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 9zm0-1A1.5 1.5 0 0 0 6 10.5h1a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </a>
            ) : null}
          </div>
          <h4>{project.description}</h4>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
