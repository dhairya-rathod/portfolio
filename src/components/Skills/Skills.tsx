/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  return (
    <section
      className="w-full py-12 relative select-none"
      id={MENULINKS[1].ref}
    >
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <h1 className="text-5xl mt-2 font-bold text-gradient w-fit seq">
              My Skills
            </h1>
            <h2 className="text-[1.3rem] font-bold md:max-w-lg w-full mt-2 seq">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex flex-wrap items-center gap-6 transform-gpu seq">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  key={skill}
                  src={`/images/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap items-center gap-6 transform-gpu seq">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <Image
                  key={skill}
                  src={`/images/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                DATABASES
              </h3>
              <div className="flex flex-wrap items-center gap-6 transform-gpu seq">
                {SKILLS.databases.map((skill) => (
                  <Image
                    key={skill}
                    src={`/images/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                Other
              </h3>
              <div className="flex flex-wrap items-center gap-6 transform-gpu seq">
                {SKILLS.other.map((skill) => (
                  <Image
                    key={skill}
                    src={`/images/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
