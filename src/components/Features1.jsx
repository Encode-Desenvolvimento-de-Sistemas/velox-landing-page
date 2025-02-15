import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import code from "../assets/images/code.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-48"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Envio simples, rápido e seguro!</span>
              <h2 className="mt-6 mb-8 text-3xl lg:text-3xl text-white">
                Códigos OTP por SMS ou E-mail, sem complicação
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Nossa API permite o envio ultrarrápido de códigos de verificação
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Envio instantâneo de OTP's</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Integração ágil e descomplicada</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Documentação clara e intuitiva</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-4/4 mx-auto lg:w-1/2 flex flex-wrap pl-6 lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">

                <img
                  src={code.src}
                  alt="Feature image 1"
                  aria-label="Feature image 1"
                />

          </div>
        </div>
      </motion.div>
    </section>
  );
};
