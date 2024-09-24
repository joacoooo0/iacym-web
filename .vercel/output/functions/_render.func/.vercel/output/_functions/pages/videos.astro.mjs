/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dt8JLDlx.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer, b as $$Layout } from '../chunks/Footer_CjyYDxa3.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Videos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-73ne5lbz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-73ne5lbz": true })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center bg-white text-white gap-y-14 py-32 px-5" data-astro-cid-73ne5lbz> <h1 class="text-[#141414] lg:text-6xl text-5xl text-center font-bold mb-10" data-astro-cid-73ne5lbz>
Casa de vida en línea
</h1> <a <div class="parallax-section-podcast lg:w-[1000px] w-full h-72 rounded-xl" data-astro-cid-73ne5lbz> <div class="parallax-overlay-podcast h-72 flex items-center justify-center rounded-xl" data-astro-cid-73ne5lbz> <h1 class="text-white font-bold lg:text-6xl text-3xl" data-astro-cid-73ne5lbz>Podcast</h1> </div> </a> <a <div class="parallax-section-predicas lg:w-[1000px] w-full h-72 rounded-xl" data-astro-cid-73ne5lbz> <div class="parallax-overlay-predicas h-72 flex items-center justify-center rounded-xl" data-astro-cid-73ne5lbz> <h1 class="text-white font-bold lg:text-6xl text-3xl" data-astro-cid-73ne5lbz>Predicas</h1> </div> </a> <a <div class="parallax-section-evangelismo lg:w-[1000px] w-full h-72 rounded-xl" data-astro-cid-73ne5lbz> <div class="parallax-overlay-evangelismo h-72 flex items-center justify-center rounded-xl" data-astro-cid-73ne5lbz> <h1 class="text-white font-bold lg:text-6xl text-3xl text-center" data-astro-cid-73ne5lbz>
Evangelismo y Misiones
</h1> </div> </a> <a <div class="parallax-section-devocionales lg:w-[1000px] w-full h-72 rounded-xl" data-astro-cid-73ne5lbz> <div class="parallax-overlay-devocionales h-72 flex items-center justify-center rounded-xl" data-astro-cid-73ne5lbz> <h1 class="text-white font-bold lg:text-6xl text-3xl" data-astro-cid-73ne5lbz>Devocionales</h1> </div> </a> <a <div class="parallax-section-cuentos lg:w-[1000px] w-full h-72 rounded-xl" data-astro-cid-73ne5lbz> <div class="parallax-overlay-cuentos h-72 flex items-center justify-center rounded-xl" data-astro-cid-73ne5lbz> <h1 class="text-white font-bold lg:text-6xl text-3xl" data-astro-cid-73ne5lbz>Cuentos</h1> </div> </a> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-73ne5lbz": true })} ` })} `;
}, "D:/Repositorios/astro-resend/src/pages/videos.astro", void 0);

const $$file = "D:/Repositorios/astro-resend/src/pages/videos.astro";
const $$url = "/videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Videos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
