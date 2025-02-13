import { motion } from "framer-motion";

export const HeroPrivacyPolicy = () => {

  return (
    <section
      className="w-screen  flex justify-center items-center bg-bgDark1 hero-bg-gradient"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[1000px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center mt-16 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">
            <h1>Política</h1>
          </div>
          <h1 className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-20 md:px-24 lg:px-24">
            de Privacidade
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 mb-16">
            Última atualização: 02 de fevereiro de 2025
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
