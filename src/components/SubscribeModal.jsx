import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { usePlanStore } from "../store";
import { useState } from "react";

export const SubscribeModal = ({ setIsOpen }) => {
  const { planSelected } = usePlanStore();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    cpf: "",
    phone: "",
    email: "",
    password: "",
    cardName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({ email: false });
  // Lógica para verificar se os campos estão preenchidos
  const isStep1Complete =
    form.fullName.trim() &&
    form.cpf.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim() &&
    !errors.email;

  const isStep2Complete =
    form.cardName.trim() &&
    form.cardNumber.trim().replace(/\s/g, "").length === 16 &&
    form.expiration.trim().length === 5 &&
    form.cvv.trim().length === 3;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      setForm({ ...form, cpf: formatted });
    } else if (name === "phone") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 11)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
      setForm({ ...form, phone: formatted });
    } else if (name === "cardNumber") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 16)
        .replace(/(\d{4})(?=\d)/g, "$1 ");
      setForm({ ...form, cardNumber: formatted });
    } else if (name === "expiration") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 4)
        .replace(/(\d{2})(\d{1,2})/, "$1/$2");
      setForm({ ...form, expiration: formatted });
    } else if (name === "cvv") {
      const formatted = value.replace(/\D/g, "").substring(0, 3);
      setForm({ ...form, cvv: formatted });
    } else {
      setForm({ ...form, [name]: value });
    }

    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setErrors({ ...errors, email: !isValid });
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative">
              {/* Informações do plano à esquerda */}
              <div className="w-1/2 hidden lg:inline">
                <h2 className="mt-6 mb-2 text-4xl text-primaryText">
                  {planSelected.title || "Plano selecionado"}
                </h2>
                <p className="text-2xl text-secondaryColor mr-8">
                  {planSelected.description || "Descrição do plano selecionado"}
                </p>
                <ul className="mb-6 text-primaryText mt-8">
                  {(planSelected.benefits || []).map((benefit, index) => (
                    <li className="mb-4 flex" key={index}>
                      <CheckArrowIcon />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formulário à direita */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center sm:pt-0">
                <div className="flex flex-col space-y-4">
                  <p className="text-lg font-semibold text-primaryText">
                    {step === 1
                      ? "Informações Pessoais"
                      : "Informações de Pagamento"}
                  </p>
                  {step === 1 && (
                    <>
                      <input
                        className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleInputChange}
                        placeholder="Nome completo"
                      />
                      <input
                        className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="text"
                        name="cpf"
                        value={form.cpf}
                        onChange={handleInputChange}
                        placeholder="CPF (XXX.XXX.XXX-XX)"
                      />
                      <input
                        className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="Telefone (XX) XXXXX-XXXX"
                      />
                      <p className="text-lg font-semibold text-primaryText">
                        Dados de acesso
                      </p>
                      <input
                        className={`px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } bg-gray-200 rounded-lg focus:ring focus:ring-indigo-300`}
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="E-mail"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          E-mail inválido
                        </span>
                      )}
                      <input
                        className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="password"
                        name="password"
                        value={form.password || ""}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        placeholder="Senha"
                      />
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <input
                        className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="text"
                        name="cardName"
                        value={form.cardName}
                        onChange={handleInputChange}
                        placeholder="Nome do titular do cartão"
                      />
                      <input
                        className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="text"
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleInputChange}
                        placeholder="Número do cartão (XXXX XXXX XXXX XXXX)"
                      />
                      <div className="flex space-x-4">
                        <input
                          className="px-4 py-3 w-1/2 text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          type="text"
                          name="expiration"
                          value={form.expiration}
                          onChange={handleInputChange}
                          placeholder="Vencimento (MM/YY)"
                        />
                        <input
                          className="px-4 py-3 w-1/2 text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          type="text"
                          name="cvv"
                          value={form.cvv}
                          onChange={handleInputChange}
                          placeholder="CVV"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Botões de navegação */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      className="py-2 px-6 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      onClick={prevStep}
                    >
                      Voltar
                    </button>
                  )}
                  {step < 2 ? (
                    <button
                      className={`py-2 px-6 rounded-lg text-white ${
                        isStep1Complete
                          ? "bg-indigo-500 hover:bg-indigo-600"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                      onClick={nextStep}
                      disabled={!isStep1Complete}
                    >
                      Próximo
                    </button>
                  ) : (
                    <button
                      className={`py-2 px-6 rounded-lg text-white ${
                        isStep2Complete
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                      onClick={() => alert("Assinatura concluída!")}
                      disabled={!isStep2Complete}
                    >
                      Finalizar
                    </button>
                  )}
                </div>
              </div>

              {/* Botão de fechar */}
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
