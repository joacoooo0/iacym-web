/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BGvbtnQH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from '../chunks/Footer_DOBO56oD.mjs';
import { $ as $$Card, b as bibleIcon, a as blessIcon, p as palomaIcon } from '../chunks/pigeon_M-FLxtTe.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const crossIcon = new Proxy({"src":"/_astro/cross-svgrepo-com.BRe7KCLy.svg","width":512,"height":512,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/cross-svgrepo-com.svg";
							}
							
							return target[name];
						}
					});

const coraIcon = new Proxy({"src":"/_astro/hearth.-lI3oDfP.svg","width":203,"height":203,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/hearth.svg";
							}
							
							return target[name];
						}
					});

const cruzCard = new Proxy({"src":"/_astro/cruz-sinfondo.DLusHMgF.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/cruz-sinfondo.png";
							}
							
							return target[name];
						}
					});

const lavacroCard = new Proxy({"src":"/_astro/lavacro-sinfondo.CcA4zbeQ.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/lavacro-sinfondo.png";
							}
							
							return target[name];
						}
					});

const jarraCard = new Proxy({"src":"/_astro/jarra-sinfondo.B2P7HMyg.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/jarra-sinfondo.png";
							}
							
							return target[name];
						}
					});

const coronaCard = new Proxy({"src":"/_astro/corona-sinfondo.Bjf43J8C.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/corona-sinfondo.png";
							}
							
							return target[name];
						}
					});

function Creencias() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mt-40 mb-24", children: /* @__PURE__ */ jsx("h1", { className: "text-[#141414] lg:text-6xl text-5xl text-center font-extrabold", children: "El Evangelio Cuádruple" }) }),
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "lg:w-[900px] w-full h-64 rounded-xl mb-16",
        onClick: () => openModal("La Cruz"),
        children: /* @__PURE__ */ jsx("div", { className: "bg-cruz bg-center bg-no-repeat bg-cover m-inline h-64 w-auto rounded-xl mb-16", children: /* @__PURE__ */ jsx("div", { className: "bg-overlay h-64 flex items-center lg:justify-between justify-center rounded-xl lg:p-20 p-4", children: /* @__PURE__ */ jsxs("div", { className: "lg:flex items-center lg:justify-start justify-center align-middle content-center", children: [
          /* @__PURE__ */ jsx("img", { src: cruzCard.src, alt: "La Cruz", className: "lg:w-24 w-12" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:ml-5 justify-center lg:items-start", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-white font-bold lg:text-4xl text-2xl", children: "La Cruz" }),
            /* @__PURE__ */ jsx("h1", { className: "text-white font-light lg:text-2xl text-xs", children: "Jesús Nuestro Salvador" })
          ] })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "lg:w-[900px] w-full h-64 rounded-xl mb-16",
        onClick: () => openModal("El Lavacro"),
        children: /* @__PURE__ */ jsx("div", { className: "bg-lavacro bg-center bg-no-repeat bg-cover m-inline h-64 rounded-xl mb-16", children: /* @__PURE__ */ jsx("div", { className: "bg-overlay h-64 flex items-center lg:justify-between justify-center rounded-xl lg:p-20 p-4", children: /* @__PURE__ */ jsxs("div", { className: "lg:flex items-center lg:justify-start justify-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: lavacroCard.src,
              alt: "El Lavacro",
              className: "lg:w-24 w-12"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:ml-5 justify-center lg:items-start", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-white font-bold lg:text-4xl text-2xl", children: "El Lavacro" }),
            /* @__PURE__ */ jsx("h1", { className: "text-white font-light lg:text-2xl text-xs", children: "Jesús Nuestro Santificador" })
          ] })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "lg:w-[900px] w-full h-64 rounded-xl mb-16",
        onClick: () => openModal("La Jarra"),
        children: /* @__PURE__ */ jsx("div", { className: "bg-jarra bg-center bg-no-repeat bg-cover m-inline h-64 rounded-xl mb-16", children: /* @__PURE__ */ jsx("div", { className: "bg-overlay h-64 flex items-center lg:justify-between justify-center rounded-xl lg:p-20 p-4", children: /* @__PURE__ */ jsxs("div", { className: "lg:flex items-center lg:justify-start justify-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: jarraCard.src,
              alt: "La Jarra",
              className: "lg:w-24 w-12"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:ml-5 justify-center lg:items-start", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-white font-bold lg:text-4xl text-2xl", children: "La Jarra" }),
            /* @__PURE__ */ jsx("h1", { className: "text-white font-light lg:text-2xl text-xs", children: "Jesús Nuestro Sanador" })
          ] })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "lg:w-[900px] w-full h-64 rounded-xl mb-16",
        onClick: () => openModal("La Corona"),
        children: /* @__PURE__ */ jsx("div", { className: "bg-corona bg-center bg-no-repeat bg-cover m-inline h-64 rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "bg-overlay h-64 flex items-center lg:justify-between justify-center rounded-xl lg:p-20 p-4", children: /* @__PURE__ */ jsxs("div", { className: "lg:flex items-center lg:justify-start justify-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: coronaCard.src,
              alt: "La Corona",
              className: "lg:w-24 w-12"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:ml-5 justify-center lg:items-start", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-white font-bold lg:text-4xl text-2xl", children: "La Corona" }),
            /* @__PURE__ */ jsx("h1", { className: "text-white font-light lg:text-2xl text-xs", children: "Jesús Nuestro Rey Que Viene" })
          ] })
        ] }) }) })
      }
    )
  ] });
}

const $$Creencias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center bg-white text-white p-20"> <div class="flex flex-col items-center justify-center lg:gap-y-16"> <h1 class="text-[#141414] lg:text-6xl text-5xl text-center font-extrabold lg:mb-0 mb-16">
¿En qué creemos?
</h1> <div class="lg:flex items-center justify-center gap-x-10"> ${renderComponent($$result2, "Card", $$Card, { "imageImport": bibleIcon, "titleCard": "La Biblia", "descriptionCard": "Creemos que la Biblia es la revelaci\xF3n autorizada de Dios a los hombres y que est\xE1 completamente sin errores, inspirada \xFAnicamente por la direcci\xF3n del Esp\xEDritu Santo. Por lo tanto, las Escrituras son las \xFAnicas gu\xEDas confiables en cuestiones de fe y pr\xE1ctica." })} ${renderComponent($$result2, "Card", $$Card, { "imageImport": blessIcon, "titleCard": "Dios", "descriptionCard": "Creemos en la Trinidad \u2014 Tres Personas: Padre, Hijo y Esp\xEDritu Santo. Los tres son igualmente Dios, son de una sola sustancia y no tienen principio ni fin." })} ${renderComponent($$result2, "Card", $$Card, { "imageImport": coraIcon, "titleCard": "Jesucristo", "descriptionCard": "Creemos que Jesucristo es plenamente Dios y plenamente hombre, concebido del Esp\xEDritu Santo y nacido virgen de Mar\xEDa. Muri\xF3 en la cruz como nuestro sustituto, asumiendo sobre s\xED el castigo por nuestro pecado. Fue enterrado y resucitado f\xEDsicamente para demostrar la integridad de Su obra, proporcionando nuestra victoria sobre el pecado y la muerte." })} </div> <div class="lg:flex items-center justify-center gap-x-10"> ${renderComponent($$result2, "Card", $$Card, { "imageImport": crossIcon, "titleCard": "Salvaci\xF3n", "descriptionCard": "Creemos que el hombre fue creado para disfrutar de una relaci\xF3n estrecha e \xEDntima con Dios, pero que pec\xF3 y, por lo tanto, cay\xF3 bajo el juicio de Dios \u2014 f\xEDsicamente en la muerte, espiritualmente en alienaci\xF3n de Dios. Toda la humanidad ha heredado este estado y una naturaleza pecaminosa. Por lo tanto, el remedio de Dios para la ruina del hombre es enteramente de gracia a trav\xE9s de la confianza personal en lo que Cristo complet\xF3 para \xE9l en la cruz." })} ${renderComponent($$result2, "Card", $$Card, { "imageImport": palomaIcon, "titleCard": "Regreso de Cristo", "descriptionCard": "Creemos en el regreso personal de nuestro Se\xF1or Jesucristo antes del establecimiento de Su reino en la tierra. Los que son creyentes estar\xE1n para siempre en la presencia de Dios, y los que han rechazado a Cristo ser\xE1n separados de Dios para siempre." })} </div> </div> ${renderComponent($$result2, "CreenciasForm", Creencias, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Repositorios/astro-resend/src/components/CreenciasForm.tsx", "client:component-export": "default" })} <h1 class="text-[#141414] lg:text-6xl text-5xl text-center font-extrabold mb-7 mt-32">
Nuestra Cultura
</h1> <p class="text-[#141414] lg:w-[450px] w-52 text-center text-[12px]">
Nuestro ADN es un conjunto de valores que hacen de Casa de Vida quiénes
      somos. Estos valores están en el corazón de nuestra iglesia y crean
      nuestra identidad como pueblo y organización. Estos son valores que
      siempre han estado con nosotros y nunca cambiarán
</p> <div class="flex flex-col items-center justify-center gap-y-16 mt-20"> <div class="lg:grid grid-cols-2 gap-24 text-center"> <div class="flex flex-col items-center"> <div class="bg-[#0057b7] text-white rounded-full w-32 h-32 flex items-center justify-center text-4xl font-bold">
1
</div> <p class="mt-4 text-[#141414] font-bold lg:text-2xl text-xl">
Mano abierta
</p> <p class="mt-4 text-[#141414] font-medium text-sm w-64">
Nos encanta celebrar y asociarnos donde Dios está trabajando en toda
            nuestra ciudad y en todo el mundo.
</p> </div> <div class="flex flex-col items-center mt-10 lg:mt-0"> <div class="bg-[#0057b7] text-white rounded-full w-32 h-32 flex items-center justify-center text-4xl font-bold">
2
</div> <p class="mt-4 text-[#141414] font-bold lg:text-2xl text-xl">
Iglesia como familia
</p> <p class="mt-4 text-[#141414] font-medium text-sm w-64">
Nos encanta ver a diferentes generaciones adorando una al lado de la
            otra. Eso significa que todos hacemos sacrificios, pero eso es lo
            que hace la familia.
</p> </div> <div class="flex flex-col items-center mt-10 lg:mt-0"> <div class="bg-[#0057b7] text-white rounded-full w-32 h-32 flex items-center justify-center text-4xl font-bold">
3
</div> <p class="mt-4 text-[#141414] font-bold lg:text-2xl text-xl lg:w-80 w-auto">
Enseñanza bíblica que es portátil
</p> <p class="mt-4 text-[#141414] font-medium text-sm w-64">
Nos encanta desempacar la Biblia de una manera clara para que
            podamos entenderla, aplicarla y llevarla con nosotros a donde quiera
            que vayamos.
</p> </div> <div class="flex flex-col items-center mt-10 lg:mt-0"> <div class="bg-[#0057b7] text-white rounded-full w-32 h-32 flex items-center justify-center text-4xl font-bold">
4
</div> <p class="mt-4 text-[#141414] font-bold lg:text-2xl text-xl lg:w-80 w-auto">
No se permiten personas perfectas
</p> <p class="mt-4 text-[#141414] font-medium text-sm w-64">
Nos encanta ser una familia donde es seguro compartir la verdad real
            sobre nosotros mismos y perseguir a Jesús juntos.
</p> </div> <div class="flex flex-col items-center mt-10 lg:mt-0"> <div class="bg-[#0057b7] text-white rounded-full w-32 h-32 flex items-center justify-center text-4xl font-bold">
5
</div> <p class="mt-4 text-[#141414] font-bold lg:text-2xl text-xl lg:w-96 w-auto">
El ministerio es un deporte de equipo
</p> <p class="mt-4 text-[#141414] font-medium text-sm w-64">
Nos encanta desarrollarnos y desafiarnos unos a otro para participar
            en lo que Dios está haciendo dondequiera que estemos.
</p> </div> <div class="flex flex-col items-center mt-10 lg:mt-0"> <div class="bg-[#0057b7] text-white rounded-full w-32 h-32 flex items-center justify-center text-4xl font-bold">
6
</div> <p class="mt-4 text-[#141414] font-bold lg:text-2xl text-xl lg:w-80 w-auto">
El patio delantero importa
</p> <p class="mt-4 text-[#141414] font-medium text-sm w-64">
Tomamos “Amar a tu vecino” literalmente. No creemos que sea un
            accidente que vivamos donde vivimos y tratamos de amar así.
</p> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/Repositorios/astro-resend/src/pages/creencias.astro", void 0);

const $$file = "D:/Repositorios/astro-resend/src/pages/creencias.astro";
const $$url = "/creencias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Creencias,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
