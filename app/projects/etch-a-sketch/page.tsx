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
      <p>A fun browser-based Etch-a-Sketch clone, built using JavaScript and CSS. This project explores DOM manipulation, event listeners, and simple UI interactions to create a digital drawing experience. While basic, it was a great exercise in building interactive applications from scratch.</p>
      <p><strong>Technology Used:</strong> Javascript, HTML, CSS</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/harrythomson1/etch-a-sketch" className="underline">Etch-a-Sketch</a></p>
      <p><strong>Live Demo:</strong> <a href="https://harrythomson1.github.io/etch-a-sketch/" className="underline">Etch-a-Sketch</a></p>
    </>
  );
}
