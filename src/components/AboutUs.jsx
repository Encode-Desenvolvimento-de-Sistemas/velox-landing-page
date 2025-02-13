import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-title">Sobre Nós</h2>
            <p className="mb-10 text-secondaryText leading-loose">
              Na Velox OTP, nossa missão é proporcionar segurança digital de forma eficiente e acessível. Acreditamos que a autenticação em dois fatores (2FA) deve ser simples, confiável e rápida para empresas de todos os tamanhos.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-title">Nossa Missão</h2>
            <p className="mb-10 text-secondaryText leading-loose">
              Fornecer solução de autenticação de alta performance, garantindo proteção contra acessos não autorizados e fraudes digitais, sem comprometer a experiência do usuário.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-title">Nossos Valores</h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span><b>Tecnologia</b>: Investimos continuamente em inovação para oferecer soluções avançadas.</span></li>
              <li className="mb-4 flex"><span><b>Eficiência</b>: Priorizamos desempenho e rapidez em nossos serviços.</span></li>
              <li className="mb-4 flex"><span><b>Segurança</b>: Garantimos proteção e confiabilidade em cada autenticação.</span></li>
              <li className="mb-4 flex"><span><b>Simplicidade</b>: Criamos APIs e serviços intuitivos para integração descomplicada.</span></li>
            </ul>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-title">Entre em Contato</h2>
            <p className="mb-10 text-secondaryText leading-loose">
              Se deseja saber mais sobre a Velox OTP ou tem alguma dúvida, entre em contato pelo e-mail: <b>contato@veloxotp.com</b>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
