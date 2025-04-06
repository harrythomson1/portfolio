"use client";

import { useState } from "react";
import Image from "next/image";
import { socialLinks } from "./config";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { SocialLink } from "./components/footer"; // ✅ Import SocialLinks from Footer

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale"
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
          I'm a backend-focused software engineer with 5+ years of commercial experience building scalable, reliable web applications.
        </p>
        <p>
          I specialize in clean, maintainable code that solves real-world problems without turning the codebase into a puzzle. My core stack includes Python, FastAPI, Ruby on Rails, JavaScript, TypeScript, React, PostgreSQL, MongoDB, Docker, and AWS.
        </p>
        <p>
          Before moving into tech, I worked in sales and learning development an experience that taught me how to communicate clearly and build practical solutions that actually fit the people using them.
        </p>
        <p>
          When I'm not coding, I enjoy traveling, exploring new cultures, and building small tools to simplify everyday problems.
        </p>
        <p>
          If you're looking for someone who brings technical experience and strong communication to the table, let's talk.
        </p>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-md transition-opacity duration-300 hover:opacity-90 bg-blue-600 dark:bg-gray-800 text-white"
          >
            Hire Me
          </button>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Let's Connect</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Reach me on any of these platforms:</p>

                <div className="flex justify-center gap-4 mb-4">
                  <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
                  <SocialLink href={socialLinks.github} icon={FaGithub} />
                  <SocialLink href={socialLinks.twitter} icon={FaTwitter} />
                  <SocialLink href={socialLinks.email} icon={TbMailFilled} />
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
      </div>
    </section>
  );
}
