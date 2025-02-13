import { motion } from "framer-motion";
import code from "../assets/images/code.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const TermsAndConditions = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-12 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="terms"
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
              Bem-vindo à Velox OTP! Estes Termos de Uso regem o acesso e uso da nossa plataforma e serviços. Ao utilizar a Velox OTP, você concorda com estes termos. Caso não concorde, recomendamos que não utilize nossos serviços.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-title">1. DEFINIÇÕES</h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span><b>Velox OTP</b>: Plataforma de autenticação em dois fatores (2FA) que permite o envio de códigos OTP via SMS e e-mail.</span></li>
              <li className="mb-4 flex"><span><b>Usuário</b>: Qualquer pessoa ou empresa que utilize nossos serviços.</span></li>
              <li className="mb-4 flex"><span><b>Serviços</b>: API e ferramentas oferecidas pela Velox OTP para autenticação e segurança digital.</span></li>
              <li className="mb-4 flex"><span><b>Conta</b>: Cadastro realizado pelo Usuário para acessar os serviços.</span></li>
            </ul>
            
            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">2. USO DOS SERVIÇOS</h2>
            <h3 className="content-title py-3 sm:pt-0 pr-8 sm:pr-0">2.1. Cadastro e Conta</h3>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span>O Usuário deve fornecer informações precisas ao se cadastrar.</span></li>
              <li className="mb-4 flex"><span>O uso da conta é pessoal e intransferível.</span></li>
              <li className="mb-4 flex"><span>A Velox OTP pode suspender ou cancelar contas que violem estes termos.</span></li>
            </ul>

            <h3 className="content-title py-3 sm:pt-0 pr-8 sm:pr-0">2.2. Responsabilidades do Usuário</h3>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span>Garantir que os códigos OTP sejam utilizados para finalidades legais.</span></li>
              <li className="mb-4 flex"><span>Não utilizar a Velox OTP para práticas abusivas, fraudulentas ou ilícitas.</span></li>
              <li className="mb-4 flex"><span>Manter a segurança de suas credenciais de acesso à API.</span></li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">3. PLANOS, PAGAMENTOS E REEMBOLSOS</h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span>A Velox OTP oferece planos gratuitos e pagos, conforme descrito em nossa página de preços.</span></li>
              <li className="mb-4 flex"><span>Os planos pagos podem ser cobrados mensalmente ou anualmente.</span></li>
              <li className="mb-4 flex"><span>Não oferecemos reembolsos para planos já pagos, exceto em casos de falhas comprovadas do serviço.</span></li>
            </ul>
            
            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">4. PRIVACIDADE E SEGURANÇA</h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"><span>Respeitamos a privacidade dos Usuários e protegemos seus dados conforme nossa Política de Privacidade.</span></li>
              <li className="mb-4 flex"><span>Os dados dos Usuários não serão compartilhados com terceiros sem consentimento, salvo exigência legal.</span></li>
            </ul>
            
            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">5. CONTATO</h2>
            <p className="mb-10 text-secondaryText leading-loose">
              Para dúvidas ou suporte, entre em contato pelo e-mail: <b>suporte@veloxotp.com</b>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
