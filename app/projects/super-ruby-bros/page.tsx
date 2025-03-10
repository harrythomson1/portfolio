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
      <p>One of my first coding projects, Super Ruby Bros is a simple 2D platformer built entirely in Ruby using Ruby2D. While Ruby isn't typically used for game development, this project was a fun experiment in handling physics, collision detection, and game loops in an unconventional language. It taught me valuable lessons in structuring code for interactive applications. Looking back, it's rough, but it's a milestone that pushed my problem-solving skills forward.</p>
      <p><strong>Technology Used:</strong> Ruby, Ruby2D</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/harrythomson1/super-ruby-bros" className="underline">Super Ruby Bros</a></p>
    </>
  );
}
