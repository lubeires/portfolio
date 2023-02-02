import { useTypewriter, Cursor } from "react-simple-typewriter";
export const Home = () => {
  const [text] = useTypewriter({
    words: ["hello, world!"],
    typeSpeed: 120,
  });

  return (
    <section id="home">
      <code>
        &lt;
        <code id="hello">
          {text}
          <Cursor />
        </code>
        /&gt;
      </code>
      <p>
        meu nome é <strong>Luana Palhares</strong>
      </p>
      <p>
        sou uma <strong>desenvolvedora web full stack</strong> em constante
        processo de aprendizagem
      </p>
    </section>
  );
};
