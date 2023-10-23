/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  return (
    <section
      className="w-full py-12 relative select-none min-h-screen flex h-full items-center"
      id={MENULINKS[1].ref}
    >
      <div className="section-container w-full flex flex-col justify-center">
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <h1 className="text-5xl mt-2 font-bold text-gradient w-fit ">
              My Skills
            </h1>
            <h2 className="text-[1.3rem] font-bold md:max-w-lg w-full mt-2 ">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 ">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex flex-wrap items-center gap-6 transform-gpu">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  className="image-zoom-in"
                  key={skill}
                  src={`/images/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  title={skill}
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 ">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap items-center gap-6 transform-gpu ">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <Image
                  className="image-zoom-in"
                  key={skill}
                  src={`/images/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  title={skill}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 ">
                DATABASES
              </h3>
              <div className="flex flex-wrap items-center gap-6 transform-gpu ">
                {SKILLS.databases.map((skill) => (
                  <Image
                    className="image-zoom-in"
                    key={skill}
                    src={`/images/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    title={skill}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 ">
                Other
              </h3>
              <div className="flex flex-wrap items-center gap-6 transform-gpu ">
                {SKILLS.other.map((skill) => (
                  <Image
                    className="image-zoom-in"
                    key={skill}
                    src={`/images/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    title={skill}
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
