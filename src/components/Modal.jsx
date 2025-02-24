import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const Modal = ({ setIsOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full sm:w-3/4 md:w-2/5 lg:w-1/3 bg-white rounded-2xl shadow-lg py-8 px-6 backdrop-blur-xl fixed mx-auto z-50 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-4">
              <CheckArrowIcon className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Cadastro Concluído!
            </h2>
            <p className="text-gray-600 mb-6">
              Seu cadastro foi realizado com sucesso. Agora você pode acessar sua conta.
            </p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Ok
            </button>
            {/* <div
              className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div> */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};