import { useState } from "react";

export default function EmailForm() {
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar el mensaje de confirmación

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { fullName, email, message } = Object.fromEntries(formData);
    console.log({ fullName, email, message });

    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Mensaje para Casa de Vida <onboarding@resend.dev>",
          to: ["informes@iacym-casadevida.com"],
          subject: `Mensaje de ${fullName} - ${email}`,
          html: `${message}`,
        }),
      });

      const data = await res.json();
      console.log(data);
      setIsSubmitted(true); // Mostrar mensaje de confirmación después del envío
    } catch (e) {
      console.error(e);
    }
  };

  const handleRedirect = () => {
    window.location.href = "/"; // Redirigir a la página de inicio
  };

  return (
    <div className="transition-all duration-500 ease-in-out">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-y-2 transition-all duration-300 ease-in-out"
        >
          <h2 className="font-semibold text-[#141414] min-h-full">
            Nombres y apellidos
          </h2>
          <input
            type="text"
            name="fullName"
            className="bg-[#0059AD] bg-opacity-10 text-[#141414] md:w-[299px] w-[280px] h-[34px] rounded-md p-2"
          />
          <h2 className="font-semibold text-[#141414]">Correo electrónico</h2>
          <input
            type="email"
            name="email"
            className="bg-[#0059AD] bg-opacity-10 text-[#141414] md:w-[299px] w-[280px] h-[34px] rounded-md p-2"
          />
          <h2 className="font-semibold text-[#141414]">Mensaje</h2>
          <input
            type="text"
            name="message"
            className="bg-[#0059AD] bg-opacity-10 text-[#141414] md:w-[299px] w-[280px] h-[130px] rounded-md p-2 resize-none"
          />
          <input
            className="bg-[#0059AD] text-white font-semibold rounded-md h-10 mt-6 p-2 transition-all duration-300 ease-in-out hover:bg-[#003d79]"
            type="submit"
            value="Enviar correo"
          />
        </form>
      ) : (
        <div className="bg-green-100 text-green-800 p-4 rounded-md transition-all duration-500 ease-in-out">
          <h3 className="text-lg font-semibold">
            Gracias por contactarte con Casa de Vida
          </h3>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-blue-700"
            onClick={handleRedirect}
          >
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
}
