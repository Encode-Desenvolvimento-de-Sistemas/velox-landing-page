import { useState } from "react";
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const FAQData = [
  {
    question: "O que é a Velox OTP?",
    answer:
      "A Velox OTP é uma solução de autenticação em dois fatores (2FA) que permite o envio de códigos de verificação por SMS e e-mail, garantindo mais segurança para acessos e transações.",
  },
  {
    question: "Como funciona o envio de códigos OTP?",
    answer:
      "Nossa API permite que sua aplicação envie códigos de verificação de forma instantânea para validar usuários. Basta integrar a API com a sua plataforma, enviar o código usando o endpoint de envio e validar com o endpoint de validação.",
  },
  {
    question: "A API da Velox OTP é fácil de integrar?",
    answer:
      "Sim! Nossa API foi desenvolvida para ser intuitiva e de fácil implementação. Contamos com uma documentação clara e exemplos práticos para acelerar sua integração.",
  },
  {
    question: "Quais são os benefícios de usar a Velox OTP?",
    answer:
      "🔹 Segurança reforçada para acessos e transações🔹 Envio ultrarrápido de OTPs via SMS e e-mail<br>🔹 Escalabilidade para qualquer tamanho de negócio",
  },
  {
    question: "A Velox OTP suporta grandes volumes de envio?",
    answer:
      "Sim! Nossa infraestrutura é escalável e suporta um alto volume de requisições sem comprometer o desempenho.",
  },
  {
    question: "Como posso testar a API?",
    answer:
      "Você pode criar uma conta gratuita e acessar nossa documentação para testar a API e enviar seus primeiros OTPs rapidamente.",
  },
  {
    question: "Como posso obter suporte?",
    answer:
      "Nosso time de suporte está pronto para ajudar! Você pode entrar em contato pelo e-mail suporte@veloxotp.com.",
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Você tem alguma dúvida?</p>
          <h2 className="mb-16 block-big-title text-center">
            Perguntas Frequentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  idx={index}
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, idx, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {idx == 3 ? (
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex"> 
                <CheckArrowIcon />
                <span>Segurança reforçada para acessos e transações</span>
              </li>
              <li className="mb-4 flex"> 
                <CheckArrowIcon />
                <span>Envio ultrarrápido de OTPs via SMS e e-mail</span>
              </li>
              <li className="mb-4 flex"> 
                <CheckArrowIcon />
                <span>Escalabilidade para qualquer tamanho de negócio</span>
              </li>
            </ul>
          ) : content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
