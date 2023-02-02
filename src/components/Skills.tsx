const Skills = () => {
  return (
    <section id="skills">
      <div id="skills-container">
        <h2>habilidades</h2>
        <div id="skills-list">
          <ul>
            <li className="category">frontend</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
          </ul>
          <ul>
            <li className="category">backend</li>
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
            <li>NodeJS</li>
          </ul>
          <ul>
            <li className="category">outras</li>
            <li>Git e GitHub</li>
            <li>SQL</li>
            <li>Inglês (B2)</li>
          </ul>
        </div>
        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className="button"
          id="resume"
        >
          meu currículo
        </a>
      </div>
    </section>
  );
};

export default Skills;
