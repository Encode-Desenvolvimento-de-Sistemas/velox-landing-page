import { motion } from "framer-motion";
import code from "../assets/images/code.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const PrivacyPolicy = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="privacy"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <p className="mb-10 text-secondaryText leading-loose">
              Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos e protegemos seus dados ao utilizar a Velox OTP.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-title">1. INFORMAÇÕES COLETADAS</h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span><b>Informações fornecidas</b>: Nome, e-mail, telefone e outras informações necessárias para o uso do serviço.</span></li>
              <li className="mb-4 flex"><span><b>Dados de uso</b>: Informações sobre interações do usuário com a plataforma.</span></li>
              <li className="mb-4 flex"><span><b>Cookies</b>: Utilizados para melhorar a experiência do usuário.</span></li>
            </ul>
            
            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">2. USO DAS INFORMAÇÕES</h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span>Melhorar a experiência do usuário.</span></li>
              <li className="mb-4 flex"><span>Garantir a segurança dos serviços.</span></li>
              <li className="mb-4 flex"><span>Fornecer suporte e atendimento.</span></li>
            </ul>
            
            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">3. COMPARTILHAMENTO DE DADOS</h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span>Não compartilhamos dados sem consentimento, exceto quando exigido por lei.</span></li>
              <li className="mb-4 flex"><span>Podemos compartilhar informações com parceiros para fornecer melhor serviço.</span></li>
            </ul>
            
            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">4. SEGURANÇA</h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span>Implementamos medidas de segurança para proteger os dados dos usuários.</span></li>
              <li className="mb-4 flex"><span>Os usuários devem manter suas credenciais seguras.</span></li>
            </ul>
            
            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">5. ALTERAÇÕES NA POLÍTICA</h2>
            <p className="mb-10 text-secondaryText leading-loose">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos os usuários sobre mudanças significativas.
            </p>
            
            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">6. CONTATO</h2>
            <p className="mb-10 text-secondaryText leading-loose">
              Para dúvidas sobre esta política, entre em contato pelo e-mail: <b>suporte@veloxotp.com</b>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
