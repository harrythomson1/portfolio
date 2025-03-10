import Image from "next/image";

export default function SuperRubyBros() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-8 pb-4 text-center">Super Ruby Bros</h1>
      <Image
        src="/super-ruby-bros.gif"
        alt="Super Ruby Bros Gameplay"
        width={600}
        height={400}
        className="pb-4"
      />
      <p className="pb-4">Super Ruby Bros is a 2D platformer built in Ruby using Ruby2D, featuring physics-based movement, collision detection, and basic AI behaviors. While Ruby isn’t a conventional choice for game development, this project challenged me to implement game loops, sprite animations, and object interactions from scratch.</p>
      <p className="pb-4">Through this project, I gained experience in event-driven programming, optimizing real-time updates, and structuring code for interactive applications. It was a pivotal step in my development journey, reinforcing my problem-solving skills and deepening my understanding of how game engines handle state and logic.</p>
      <p><strong>Technologies Used:</strong></p>
      <p><strong>Ruby</strong> - Core logic and object-oriented structure</p>
      <p className="pb-4"><strong>Ruby2D</strong> - Rendering, sprite management, and input handling</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/harrythomson1/super-ruby-bros" className="underline">Super Ruby Bros</a></p>
    </>
  );
}
