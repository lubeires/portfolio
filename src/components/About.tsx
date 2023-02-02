import darkGradient from "../static/dark-gradient.png";

export const About = () => {
  return (
    <section id="about">
      <div id="dark-background"></div>
      <h2>sobre mim</h2>
      <p>
        Sou apaixonada por programação, design e resolução de problemas. Em
        2022, decidi focar em aprender{" "}
        <strong>desenvolvimento web full stack</strong> por conta própria e,
        desde então, tenho colocado meus conhecimentos em prática através de
        projetos pessoais.
      </p>
      <p>
        Busco aprendizado constante e estou disposta a superar desafios - sempre
        com foco e atenção aos detalhes.
      </p>
      <img src={darkGradient} alt="dark gradient" id="dark-gradient" />
    </section>
  );
};
