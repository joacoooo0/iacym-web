/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dt8JLDlx.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer, b as $$Layout } from '../chunks/Footer_CjyYDxa3.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_FJ9IOFiB.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const paypalIcon = new Proxy({"src":"/_astro/paypal.B73syIF_.svg","width":36,"height":36,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/paypal.svg";
							}
							
							return target[name];
						}
					});

const $$Dar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iglesia Casa de Vida", "data-astro-cid-zsma2neu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-zsma2neu": true })} ${maybeRenderHead()}<main data-astro-cid-zsma2neu> <div class="parallax-section h-screen relative" data-astro-cid-zsma2neu> <div class="parallax-overlay absolute inset-0 flex flex-col items-center justify-center text-white text-center text-balance xl:px-96 px-10" data-astro-cid-zsma2neu> <h1 class="sm:text-7xl text-5xl font-extrabold" data-astro-cid-zsma2neu>Dar</h1> <p class="mt-4 sm:text-2xl text-xl font-semibold text-pretty" data-astro-cid-zsma2neu>
Como siempre, gracias por ser tan generosos
</p> </div> </div> <div class="bg-[#0059AD] h-40 w-full flex items-center justify-center flex-col text-white font-normal xl:text-[17px] text-[11px] text-center xl:px-96 px-[40px]" data-astro-cid-zsma2neu> <p data-astro-cid-zsma2neu>
Traigan a mi templo sus diezmos, y échenlos en el cofre de las ofrendas;
        así no les faltará alimento. ¡Pónganme a prueba con esto! Verán que
        abriré las ventanas del cielo, y les enviaré abundantes lluvias.
</p> <p class="font-semibold" data-astro-cid-zsma2neu>(Malaquías 3:10)</p> </div> <div class="bg-white h-full flex flex-col items-center justify-center px-[90px] p-24" data-astro-cid-zsma2neu> <div class="w-full flex flex-col items-center justify-center" data-astro-cid-zsma2neu> <h1 class="text-3xl font-bold mb-5 text-center" data-astro-cid-zsma2neu>¿Cómo dar online?</h1> <p class="font-normal text-[17px] text-center" data-astro-cid-zsma2neu>
Gracias por ayudar a que el mensaje llegue a muchas más personas.
</p> <p class="font-normal text-[17px] text-center" data-astro-cid-zsma2neu>
Dar tu diezmo u ofrenda a través de estas opciones es rápido y seguro:
</p> </div> <div class="w-full mt-10 2xl:flex items-start justify-between lg:px-80 px-auto" data-astro-cid-zsma2neu> <div class="flex flex-col items-center justify-center" data-astro-cid-zsma2neu> <h1 class="lg:text-3xl text-xl font-bold text-center" data-astro-cid-zsma2neu>
Dar vía paypal
</h1> <a target="_blank" href="https://www.paypal.com/pe/home" data-astro-cid-zsma2neu>${renderComponent($$result2, "Image", $$Image, { "src": paypalIcon, "alt": "paypal-icon", "class": "w-44", "data-astro-cid-zsma2neu": true })}</a> </div> <div class="flex flex-col items-center justify-center" data-astro-cid-zsma2neu> <h1 class="lg:text-3xl text-xl font-bold text-center" data-astro-cid-zsma2neu>
Dar vía transferencia
</h1> <p class="mt-7 mb-2 text-center lg:text-[16px] text-sm" data-astro-cid-zsma2neu>
Cta. Corriente en EUR (BANCO)
</p> <p class="text-center lg:text-[16px] text-sm" data-astro-cid-zsma2neu>
000-000-000000000000-00
</p> <p class="mt-10 mb-2 text-center lg:text-[16px] text-sm" data-astro-cid-zsma2neu>
Cta. Corriente en EUR (BANCO)
</p> <p class="text-center lg:text-[16px] text-sm" data-astro-cid-zsma2neu>
000-000-000000000000-00
</p> <p class="mt-10 mb-2 text-center lg:text-[16px] text-sm" data-astro-cid-zsma2neu>
Cta. Corriente en EUR (BANCO)
</p> <p class="text-center lg:text-[16px] text-sm" data-astro-cid-zsma2neu>
000-000-000000000000-00
</p> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-zsma2neu": true })} ` })} `;
}, "D:/Repositorios/astro-resend/src/pages/dar.astro", void 0);

const $$file = "D:/Repositorios/astro-resend/src/pages/dar.astro";
const $$url = "/dar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dar,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
