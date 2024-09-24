/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dt8JLDlx.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer, b as $$Layout } from '../chunks/Footer_CjyYDxa3.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_FJ9IOFiB.mjs';
export { renderers } from '../renderers.mjs';

const iglesiaP1 = new Proxy({"src":"/_astro/nosotros-1.CqlkK1Tr.jpg","width":1123,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/nosotros-1.jpg";
							}
							
							return target[name];
						}
					});

const iglesiaP2 = new Proxy({"src":"/_astro/nosotros-2.DyyFhw9f.jpg","width":1123,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/nosotros-2.jpg";
							}
							
							return target[name];
						}
					});

const iglesiaP3 = new Proxy({"src":"/_astro/nosotros-3.CSC-0irH.jpg","width":1123,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/nosotros-3.jpg";
							}
							
							return target[name];
						}
					});

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iglesia Casa de Vida" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center p-16 gap-y-16"> <h1 class="text-[#141414] sm:text-6xl text-5xl font-bold">Nosotros</h1> <!-- Sección 1 --> <div class="xl:flex items-center justify-center gap-x-36 relative xl:static"> <div class="xl:flex items-center justify-center relative xl:order-2 order-1 lg:text-[#141414] text-white"> <p class="md:w-[450px] w-[280px] font-normal md:text-xl text-[10px] text-center xl:text-left xl:static absolute xl:top-0 top-1/2 xl:left-0 left-1/2 transform xl:-translate-x-0 -translate-x-1/2 xl:-translate-y-0 -translate-y-1/2 z-10 xl:z-auto text-white xl:text-[#141414] mr-0 xl:mr-10">
Es un tiempo increíble para “Alianza Casa de Vida”. Sabemos que Dios
          nos ha puesto en el lugar correcto y en el tiempo correcto con el
          propósito de impactar positivamente a nuestra comunidad.
</p> <div class="relative md:w-[500px] w-[300px] xl:order-2 order-1"> ${renderComponent($$result2, "Image", $$Image, { "src": iglesiaP1, "alt": "", "class": "rounded-xl" })} <div class="absolute inset-0 bg-black bg-opacity-70 rounded-xl xl:bg-transparent"></div> </div> </div> </div> <!-- Sección 2 --> <div class="xl:flex items-center justify-center relative xl:order-2 order-1 lg:text-[#141414] text-white"> <div class="relative md:w-[500px] w-[300px] xl:order-2 order-1"> ${renderComponent($$result2, "Image", $$Image, { "src": iglesiaP2, "alt": "", "class": "rounded-xl" })} <div class="absolute inset-0 bg-black bg-opacity-70 rounded-xl xl:bg-transparent"></div> </div> <p class="md:w-[450px] w-[280px] font-normal md:text-xl text-[10px] text-sm xl:order-2 order-1 text-center xl:text-left xl:static absolute xl:top-0 top-1/2 xl:left-0 left-1/2 transform xl:-translate-x-0 -translate-x-1/2 xl:-translate-y-0 -translate-y-1/2 z-10 xl:z-auto text-white xl:text-[#141414] ml-0 xl:ml-10">
Casa de Vida es un lugar donde todos son bienvenidos, es por esto que
        queremos invitarte, junto con tu familia para que nos visiten.
</p> </div> <!-- Sección 3 --> <div class="xl:flex items-center justify-center relative xl:order-2 order-1 lg:text-[#141414] text-white"> <p class="md:w-[450px] w-[280px] font-normal md:text-xl text-[10px] text-center xl:text-left xl:static absolute xl:top-0 top-1/2 xl:left-0 left-1/2 transform xl:-translate-x-0 -translate-x-1/2 xl:-translate-y-0 -translate-y-1/2 z-10 xl:z-auto text-white xl:text-[#141414] mr-0 xl:mr-10">
En nuestra Iglesia los mensajes que se predican son prácticos y
        relevantes, te retarán y te ayudarán a encontrar el propósito y la
        dirección para tu vida. Los programas para nuestros estudiantes y niños
        son divertidos, y nuestros maestros están listos para ayudar y motivar a
        tus hijos en su crecimiento espiritual como seguidores de Cristo.
</p> <div class="relative md:w-[500px] w-[300px] xl:order-2 order-1"> ${renderComponent($$result2, "Image", $$Image, { "src": iglesiaP3, "alt": "", "class": "rounded-xl" })} <div class="absolute inset-0 bg-black bg-opacity-70 rounded-xl xl:bg-transparent"></div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/Repositorios/astro-resend/src/pages/nosotros.astro", void 0);

const $$file = "D:/Repositorios/astro-resend/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Nosotros,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
