export default function EmailForm() {
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
          to: ["joaco0mr4@gmail.com"],
          subject: `Mensaje de ${fullName} - ${email}`,
          html: `${message}`,
        }),
      });
      const data = await res.json();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-y-2"
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
          className="bg-[#0059AD] text-white font-semibold rounded-md h-10 mt-6 p-2"
          type="submit"
          value="Enviar correo"
        />
      </form>
    </div>
  );
}
