"use client";
import React from "react";
import { motion } from "motion/react";

const mainPhoto = `${process.env.PUBLIC_URL}/assets/mainPhoto.png`;

const AboutContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-foreground">
      <h2 className="text-2xl font-bold mb-4 text-foreground">About Me</h2>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="mb-6 text-muted-foreground"
      >
        <img
          className="rounded-full w-40 h-40 object-cover float-right ml-4 mb-4 md:ml-0 md:mb-0"
          alt="Maksims Nikitins photo"
          src={mainPhoto}
          width={160}
          height={160}
        />
        <div className="md:flex-1">
          <p>
            Based in Riga, Latvia, I am a frontend developer with a passion for
            problem-solving and coding. I am committed to continuous learning
            and staying updated with new technologies. My skills include
            effectively self-managing independent projects and collaborating
            within a team.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-foreground mt-6">
          Professional Background
        </h3>
        <p className="mb-2">
          Currently, I work as a Senior frontend developer at
          buysellvouchers.com (since June 2024), focusing on migrating a legacy
          PHP project to Next.js v15, implementing modern best practices, and
          establishing robust frontend infrastructure. My responsibilities
          include architecting the frontend application, collaborating with
          backend developers for API integration, ensuring API functionality,
          overseeing frontend architecture, participating in code reviews,
          mentoring junior developers, setting up CI/CD pipelines, and actively
          contributing to decision-making for future features and integrations.
          I have experience with technologies like Next.js, React, TypeScript,
          GitLab (CI/CD), YouTrack, Tailwind CSS, Docker, PHP, and jQuery.
        </p>
        <p className="mb-2">
          Previously, as a Frontend developer at SIA SoftRocket (December 2022 -
          June 2024), I successfully created three major projects in the
          iGambling industry, improved performance using modern Angular v17
          technologies, supported ongoing projects by integrating backend
          microservices and working with Content Management Systems, and
          conducted code reviews, mentoring junior developers. My stack there
          included Angular v17, Tailwind CSS, TypeScript, Jira, GitLab, and
          Keystone JS.
        </p>
        <p>
          I also work as a Freelancer (since November 2021), supporting and
          enhancing Shopify projects, and have experience with the nestJS
          framework, having created and supported a cryptocurrency exchange bot.
          I am proficient in working with legacy projects built with HTML/JS.
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-6 text-muted-foreground"
      >
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          Skills & Languages
        </h3>
        <p className="mb-2">
          My soft skills include Teamwork, Time Management, Communication,
          Debugging and Problem Solving, and a High Sense of Responsibility. I
          am proficient in English, Latvian, and Russian.
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
        }}
        className="mb-6 text-muted-foreground"
      >
        <h3 className="text-xl font-semibold mb-2 text-foreground">Links</h3>
        <p>
          You can find my work on{" "}
          <a
            href="https://github.com/BlowYourMind"
            target="_blank"
            className="text-foreground hover:text-backgroundHover underline"
          >
            GitHub
          </a>
          and connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/maksimnikitin/"
            target="_blank"
            className="text-foreground hover:text-backgroundHover underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="mt-8 pt-8 border-t border-muted-foreground text-muted-foreground"
      >
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          More about interests (Placeholder)
        </h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="mt-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutContent;
