import { Socials } from "@/components/UI";

const Footer = () => {
  return (
    <>
      <section className="bg-[#6930C3] pt-16 pb-12 flex flex-col justify-center items-center text-white">
        <h3 className="font-medium text-5xl">Dhairya0o7</h3>
        <p className="text-3xl font-medium mt-14">Around the web</p>
        <Socials />
      </section>
      <footer className="py-12 bg-[#7510F7] text-white text-center font-medium text-4xl">
        copyright @ Dhairya0o7
      </footer>
    </>
  );
};

export default Footer;
