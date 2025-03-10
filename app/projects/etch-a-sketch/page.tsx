import Image from "next/image";

export default function SuperRubyBros() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-8 pb-4 text-center">Etch-a-Sketch</h1>
      <Image
        src="/etch-a-sketch.gif"
        alt="Etch-a-sketch demo"
        width={600}
        height={400}
        className="pb-4"
      />
      <p className="pb-4">Etch-a-Sketch is a browser-based digital drawing tool, built using JavaScript, HTML, and CSS. It features dynamic grid generation, real-time user input handling, and customizable brush effects, allowing users to create sketches with a simple, interactive interface.</p>
      <p className="pb-4">This project strengthened my skills in DOM manipulation, handling mouse events, and designing responsive UI interactions from scratch. It also reinforced best practices for modular JavaScript and CSS grid-based layouts.</p>
      <p><strong>Technologies Used:</strong></p>
      <p><strong>JavaScript</strong> - Event-driven interactions and DOM updates</p>
      <p className="pb-4"><strong>HTML/CSS</strong> - Grid-based UI structure and responsive design</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/harrythomson1/etch-a-sketch" className="underline">Etch-a-Sketch</a></p>
      <p><strong>Live Demo:</strong> <a href="https://harrythomson1.github.io/etch-a-sketch/" className="underline">Try it here!</a></p>
    </>
  );
}
