import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Harry Thomson | Software Engineer
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a backend-focused software engineer passionate about building efficient, scalable applications.
          I have over 5 years of commercial experience.
        </p>
        <p>
          My tech stack includes Ruby, Ruby on Rails, Python, Javascript, Typescript, FastAPI, Postgresql, MongoDB, AWS, Docker. I'm always eager to learn and adapt to new technologies.
        </p>
        <p>
          Outside of work, I love traveling and exploring different cultures, as well as building apps that solve real-life problems and make my life more efficient.
        </p>
        <p>
          <a href="/contact" className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 no-underline">
            Contact Me
          </a>
        </p>
      </div>
    </section>
  );
}
