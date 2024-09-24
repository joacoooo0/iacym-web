/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BGvbtnQH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from '../chunks/Footer_DOBO56oD.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_JaHIZmgE.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const emailIcon = new Proxy({"src":"/_astro/email-contact.Bvua5vQe.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/email-contact.svg";
							}
							
							return target[name];
						}
					});

function EmailForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e) => {
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
          html: `${message}`
        })
      });
      const data = await res.json();
      console.log(data);
      setIsSubmitted(true);
    } catch (e2) {
      console.error(e2);
    }
  };
  const handleRedirect = () => {
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsx("div", { className: "transition-all duration-500 ease-in-out", children: !isSubmitted ? /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex flex-col items-start gap-y-2 transition-all duration-300 ease-in-out",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "font-semibold text-[#141414] min-h-full", children: "Nombres y apellidos" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "fullName",
            className: "bg-[#0059AD] bg-opacity-10 text-[#141414] md:w-[299px] w-[280px] h-[34px] rounded-md p-2"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "font-semibold text-[#141414]", children: "Correo electrónico" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            className: "bg-[#0059AD] bg-opacity-10 text-[#141414] md:w-[299px] w-[280px] h-[34px] rounded-md p-2"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "font-semibold text-[#141414]", children: "Mensaje" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "message",
            className: "bg-[#0059AD] bg-opacity-10 text-[#141414] md:w-[299px] w-[280px] h-[130px] rounded-md p-2 resize-none"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "bg-[#0059AD] text-white font-semibold rounded-md h-10 mt-6 p-2 transition-all duration-300 ease-in-out hover:bg-[#003d79]",
            type: "submit",
            value: "Enviar correo"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ jsxs("div", { className: "bg-green-100 text-green-800 p-4 rounded-md transition-all duration-500 ease-in-out", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Gracias por contactarte con Casa de Vida" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "mt-4 bg-blue-500 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-blue-700",
        onClick: handleRedirect,
        children: "Volver al inicio"
      }
    )
  ] }) });
}

const $$Contactanos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="bg-white flex items-center justify-center py-44 px-10"> <div class="md:flex items-center justify-center gap-x-20"> <div class="w-auto flex flex-col px-3"> <div class="mb-5"> ${renderComponent($$result2, "Image", $$Image, { "src": emailIcon, "alt": "email-icon", "class": "w-14" })} <h1 class="text-3xl font-extrabold text-[#141414] mt-5">
Contáctanos
</h1> </div> <div> ${renderComponent($$result2, "EmailForm", EmailForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Repositorios/astro-resend/src/components/EmailForm", "client:component-export": "default" })} </div> </div> <div class="font-medium flex flex-col items-start w-full md:pt-0 pt-16"> <div class="font-medium flex flex-col items-start w-80"> <div class="relative pl-4"> <!-- Borde redondeado --> <div class="absolute left-0 top-0 h-full w-1.5 bg-[#0059AD] rounded-lg"></div> <div class="pl-4"> <p class="text-[#141414] md:text-[16px] text-[14px]">
"Muchas gracias por contactarnos. Es nuestro deseo servirte de
                la mejor manera que podamos. Pronto estaremos en contacto
                contigo. Si tienes tiempo visita nuestro sitio si quieres saber
                mas acerca de nosotros"
</p> <p class="text-[#141414] md:text-[16px] text-[14px] mt-4 font-bold">
Secr. Mishel
</p> </div> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/Repositorios/astro-resend/src/pages/contactanos.astro", void 0);

const $$file = "D:/Repositorios/astro-resend/src/pages/contactanos.astro";
const $$url = "/contactanos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contactanos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
