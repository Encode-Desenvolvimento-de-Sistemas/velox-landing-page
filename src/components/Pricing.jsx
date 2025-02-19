import { useState } from "react";
import { motion } from "framer-motion";

import { SubscribeModal } from "./SubscribeModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

import { usePlanStore } from '../store';

const starter = [
  "1000 envios de SMS",
  "1000 envios de email",
  "Dashboard",
  "Relatório de envios",
  "Suporte rápido",
];
const essential = [
  "3000 envios de SMS",
  "3000 envios de email",
  "Dashboard",
  "Relatório de envios",
  "Suporte rápido",
];
const professional = [
  "5000 envios de SMS",
  "5000 envios de email",
  "Dashboard",
  "Relatório de envios",
  "Suporte rápido",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setPlanSelected } = usePlanStore();

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  const handlePlanSelection = (plan) => {
    setPlanSelected(plan);
    setIsModalOpen(true);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Planos que cabem no seu bolso</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-heading text-primaryText">
                Planos
              </h2>
              <p className="mb-6 text-secondaryText">
                Escolha o plano ideal para sua plataforma
              </p>
              {/* <label className="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-primaryColor   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-primaryText text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-10 ml-4" : "mr-10 ml-5 text-gray-400"
                    }
                  >
                    Mensal
                  </div>
                  <div className={isMonthly ? "text-gray-400 pl-1" : "pl-1"}>Anual</div>
                </div>
              </label> */}
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-10">
              {[
                {
                  id: "9e33c83b-e4dd-4c0d-bd13-7654061148bf",
                  title: "Starter",
                  value: 149.9,
                  description: "Perfeito para dar os primeiros passos e testar seu potencial",
                  benefits: starter,
                },
                {
                  id: "9e33c83b-e53b-45ca-af17-60407291de15",
                  title: "Essential",
                  value: 249.9,
                  description: "O equilíbrio perfeito entre alcance e custo-benefício",
                  benefits: essential,
                },
                {
                  id: "9e33c83b-e5b7-4be4-9e8d-d46c3668efe3",
                  title: "Professional",
                  value: 449.9,
                  description: "Máxima capacidade para quem precisa de performance e escala",
                  benefits: professional,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0 ${index != 1 && 'pt-8' }`}
                >
                  <div className="p-8 bg-bgDark3 rounded-3xl">
                    <h3 className="mb-2 text-xl font-heading text-primaryText text-left">
                      {plan.title}
                    </h3>
                    <p className="text-primaryText mt-4">Teste por 7 dias, depois</p>
                    <div className="flex justify-start items-end">
                      <div className="text-4xl sm:text-4xl font-bold text-primaryText text-left mr-2">
                        R$ {plan.value.toFixed(2)}
                      </div>
                      <div className="text-gray-500">
                        / mês
                      </div>
                    </div>
                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      {plan.description}
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-primaryText">
                      {plan.benefits.map((text, index) => (
                        <li className="mb-4 flex" key={`${text}-${index}`}>
                          <CheckArrowIcon />
                          {index < 2 ? <strong>{text}</strong> : <span>{text}</span>}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                      onClick={() => handlePlanSelection(plan)}
                      aria-label="Criar conta grátis"
                    >
                      Criar conta grátis
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <SubscribeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};