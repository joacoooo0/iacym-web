import { useState } from "react";

// Imágenes para las cards
import cruzCard from "../assets/cruz-sinfondo.png";
import lavacroCard from "../assets/lavacro-sinfondo.png";
import jarraCard from "../assets/jarra-sinfondo.png";
import coronaCard from "../assets/corona-sinfondo.png";

export default function Creencias() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <>
      <div className="mt-40 mb-24">
        <h1 className="text-[#141414] lg:text-6xl text-5xl text-center font-extrabold">
          El Evangelio Cuádruple
        </h1>
      </div>
      <a
        className="lg:w-[900px] w-full h-64 rounded-xl mb-16"
        onClick={() => openModal("La Cruz")}
      >
        <div className="bg-cruz bg-center bg-no-repeat bg-cover m-inline h-64 w-auto rounded-xl mb-16">
          <div className="bg-overlay h-64 flex items-center lg:justify-between justify-center rounded-xl lg:p-20 p-4">
            <div className="lg:flex items-center lg:justify-start justify-center align-middle content-center">
              <img src={cruzCard.src} alt="La Cruz" className="lg:w-24 w-12" />
              <div className="flex flex-col lg:ml-5 justify-center lg:items-start">
                <h1 className="text-white font-bold lg:text-4xl text-2xl">
                  La Cruz
                </h1>
                <h1 className="text-white font-light lg:text-2xl text-xs">
                  Jesús Nuestro Salvador
                </h1>
              </div>
            </div>
            {/* <button className="px-8 py-3 bg-[#004688] text-white rounded-2xl font-semibold">
              Saber más
            </button> */}
          </div>
        </div>
      </a>
      <a
        className="lg:w-[900px] w-full h-64 rounded-xl mb-16"
        onClick={() => openModal("El Lavacro")}
      >
        <div className="bg-lavacro bg-center bg-no-repeat bg-cover m-inline h-64 rounded-xl mb-16">
          <div className="bg-overlay h-64 flex items-center lg:justify-between justify-center rounded-xl lg:p-20 p-4">
            <div className="lg:flex items-center lg:justify-start justify-center">
              <img
                src={lavacroCard.src}
                alt="El Lavacro"
                className="lg:w-24 w-12"
              />
              <div className="flex flex-col lg:ml-5 justify-center lg:items-start">
                <h1 className="text-white font-bold lg:text-4xl text-2xl">
                  El Lavacro
                </h1>
                <h1 className="text-white font-light lg:text-2xl text-xs">
                  Jesús Nuestro Santificador
                </h1>
              </div>
            </div>
            {/* <button className="px-8 py-3 bg-[#004688] text-white rounded-2xl font-semibold">
              Saber más
            </button> */}
          </div>
        </div>
      </a>
      <a
        className="lg:w-[900px] w-full h-64 rounded-xl mb-16"
        onClick={() => openModal("La Jarra")}
      >
        <div className="bg-jarra bg-center bg-no-repeat bg-cover m-inline h-64 rounded-xl mb-16">
          <div className="bg-overlay h-64 flex items-center lg:justify-between justify-center rounded-xl lg:p-20 p-4">
            <div className="lg:flex items-center lg:justify-start justify-center">
              <img
                src={jarraCard.src}
                alt="La Jarra"
                className="lg:w-24 w-12"
              />
              <div className="flex flex-col lg:ml-5 justify-center lg:items-start">
                <h1 className="text-white font-bold lg:text-4xl text-2xl">
                  La Jarra
                </h1>
                <h1 className="text-white font-light lg:text-2xl text-xs">
                  Jesús Nuestro Sanador
                </h1>
              </div>
            </div>
            {/* <button className="px-8 py-3 bg-[#004688] text-white rounded-2xl font-semibold">
              Saber más
            </button> */}
          </div>
        </div>
      </a>
      <a
        className="lg:w-[900px] w-full h-64 rounded-xl mb-16"
        onClick={() => openModal("La Corona")}
      >
        <div className="bg-corona bg-center bg-no-repeat bg-cover m-inline h-64 rounded-xl">
          <div className="bg-overlay h-64 flex items-center lg:justify-between justify-center rounded-xl lg:p-20 p-4">
            <div className="lg:flex items-center lg:justify-start justify-center">
              <img
                src={coronaCard.src}
                alt="La Corona"
                className="lg:w-24 w-12"
              />
              <div className="flex flex-col lg:ml-5 justify-center lg:items-start">
                <h1 className="text-white font-bold lg:text-4xl text-2xl">
                  La Corona
                </h1>
                <h1 className="text-white font-light lg:text-2xl text-xs">
                  Jesús Nuestro Rey Que Viene
                </h1>
              </div>
            </div>
            {/* <button className="px-8 py-3 bg-[#004688] text-white rounded-2xl font-semibold">
              Saber más
            </button> */}
          </div>
        </div>
      </a>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-[#0059AD] text-white w-5 h-5 flex items-center justify-center p-3 rounded-full transition-transform transform hover:bg-[#004080] hover:scale-110"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">{modalContent}</h2>
            <p className="mb-4 text-black">contenido {modalContent}.</p>
          </div>
        </div>
      )} */}
    </>
  );
}
