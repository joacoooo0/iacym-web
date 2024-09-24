/* empty css                                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro } from '../chunks/astro/server_BGvbtnQH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from '../chunks/Footer_DOBO56oD.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Card, b as bibleIcon, a as blessIcon, p as palomaIcon } from '../chunks/pigeon_M-FLxtTe.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_JaHIZmgE.mjs';
export { renderers } from '../renderers.mjs';

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-ivdev4kk> <div class="parallax-section h-screen relative" data-astro-cid-ivdev4kk> <div class="parallax-overlay absolute inset-0 flex flex-col items-center justify-center text-white text-center text-balance xl:px-96 px-10" data-astro-cid-ivdev4kk> <h1 class="sm:text-5xl text-3xl font-bold" data-astro-cid-ivdev4kk>Bienvenido a casa de vida</h1> <p class="mt-4 sm:text-2xl text-xl text-pretty" data-astro-cid-ivdev4kk>
Tenemos una <span class="font-bold" data-astro-cid-ivdev4kk>celebración</span> enfocada en Jesús
        que te aseguro que no te dejará igual. Acompáñanos y disfruta de un tiempo
        con Dios.
</p> <a href="/nosotros" data-astro-cid-ivdev4kk><button class="mt-6 px-8 py-3 bg-[#004688] text-white rounded-2xl font-semibold" data-astro-cid-ivdev4kk>Saber más</button></a> </div> </div> </main> `;
}, "D:/Repositorios/astro-resend/src/components/Main.astro", void 0);

const $$Creencias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-28 px-5 flex flex-col justify-center items-center gap-y-20"> <h1 class="md:text-[45px] text-[35px] text-center font-extrabold text-[#141414]">
¿En qué creemos?
</h1> <div class="flex flex-col gap-x-5 items-center justify-center"> <div class="lg:flex lg:gap-x-10"> ${renderComponent($$result, "Card", $$Card, { "imageImport": bibleIcon, "titleCard": "La Biblia", "descriptionCard": "Creemos que la Biblia es la revelaci\xF3n autorizada de Dios a los hombres y que est\xE1 completamente sin errores, inspirada \xFAnicamente por la direcci\xF3n del Esp\xEDritu Santo. Por lo tanto, las Escrituras son las \xFAnicas gu\xEDas confiables en cuestiones de fe y pr\xE1ctica." })} ${renderComponent($$result, "Card", $$Card, { "imageImport": blessIcon, "titleCard": "Dios", "descriptionCard": "Creemos en la Trinidad \u2014 Tres Personas: Padre, Hijo y Esp\xEDritu Santo. Los tres son igualmente Dios, son de una sola sustancia y no tienen principio ni fin." })} ${renderComponent($$result, "Card", $$Card, { "imageImport": palomaIcon, "titleCard": "Regreso de Cristo", "descriptionCard": "Creemos en el regreso personal de nuestro Se\xF1or Jesucristo antes del establecimiento de Su reino en la tierra. Los que son creyentes estar\xE1n para siempre en la presencia de Dios, y los que han rechazado a Cristo ser\xE1n separados de Dios para siempre. " })} </div> <div> <a href="/creencias" class="bg-[#0059AD] text-white text-xl font-semibold rounded-md h-10 mt-6 p-7 flex justify-center items-center">Ver más</a> </div> </div> </section>`;
}, "D:/Repositorios/astro-resend/src/components/Creencias.astro", void 0);

const $$Astro = createAstro();
const $$CardHorario = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardHorario;
  const { titleCard, horaCard, direccionCard, imageExample } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col my-5"> <div> ${renderComponent($$result, "Image", $$Image, { "src": imageExample, "alt": "bg-reunion-general", "class": "xl:w-[504px] w-[300px] rounded-t-2xl" })} </div> <div class="bg-[#0059AD] xl:w-[504px] w-[300px] xl:h-[240px] h-[300px] text-white flex flex-col items-start justify-center rounded-b-2xl gap-y-5 p-[43px]"> <h1 class="xl:text-[33px] text-xl font-bold">${titleCard}</h1> <h3 class="text-center xl:text-[28px] text-xs font-light">${horaCard}</h3> <p class="font-light text-[17px]">${direccionCard}</p> </div> </div>`;
}, "D:/Repositorios/astro-resend/src/utils/cardHorario.astro", void 0);

const jovenes_reu = new Proxy({"src":"/_astro/main-culto-jovenes.CMTVPI5Y.jpg","width":1089,"height":816,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/main-culto-jovenes.jpg";
							}
							
							return target[name];
						}
					});

const culto_iglesia = new Proxy({"src":"/_astro/main-culto-iglesia.C594qNl9.jpg","width":1089,"height":816,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/main-culto-iglesia.jpg";
							}
							
							return target[name];
						}
					});

const $$Horarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center text-[#141414] py-20 px-5"> <h1 class="md:text-[45px] text-[35px] text-center font-extrabold mb-[31px]">
Horarios y reuniones
</h1> <h3 class="lg:text-[21px] text-[18px] mb-[75px] text-center font-semibold">
¡Llega temprano para que no te pierdas de nada!
</h3> <div class="lg:flex lg:gap-x-[30px]"> ${renderComponent($$result, "CardHorario", $$CardHorario, { "imageExample": culto_iglesia, "titleCard": "Culto de iglesia", "horaCard": "Domingos - 10:30 am", "direccionCard": "C. Torres de la Alameda, 2, 28806 Alcal\xE1 de Henares, Madrid" })} ${renderComponent($$result, "CardHorario", $$CardHorario, { "imageExample": jovenes_reu, "titleCard": "Culto de J\xF3venes", "horaCard": "S\xE1bados - 18:00 pm", "direccionCard": "C. Torres de la Alameda, 2, 28806 Alcal\xE1 de Henares, Madrid" })} </div> <div> <a href="/visitanos" class="bg-[#0059AD] text-white text-xl font-semibold rounded-md h-10 mt-6 p-7 flex justify-center items-center">Ver más</a> </div> </div>`;
}, "D:/Repositorios/astro-resend/src/components/Horarios.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, {})} ${renderComponent($$result2, "Creencias", $$Creencias, {})} ${renderComponent($$result2, "Horarios", $$Horarios, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/Repositorios/astro-resend/src/pages/index.astro", void 0);

const $$file = "D:/Repositorios/astro-resend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
