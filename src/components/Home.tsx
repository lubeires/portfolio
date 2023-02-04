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
        meu nome é <strong>Luana Palhares</strong> e eu sou uma desenvolvedora
        web
      </p>
    </section>
  );
};
