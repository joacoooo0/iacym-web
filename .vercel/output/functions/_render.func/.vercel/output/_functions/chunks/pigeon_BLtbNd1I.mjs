import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro } from './astro/server_Dt8JLDlx.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_FJ9IOFiB.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { titleCard, descriptionCard, imageImport } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-[#0059AD] xl:w-96 w-[300px] xl:h-96 h-[300px] px-5 py-10 text-white flex flex-col items-center justify-center rounded-2xl lg:mb-0 mb-5 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": imageImport, "alt": "", "class": "absolute xl:w-80 w-64 opacity-5", "style": "z-index: 1;" })} <h1 class="xl:text-5xl text-center text-3xl font-bold mb-4"> ${titleCard} </h1> <p class="text-center xl:text-sm text-xs z-10"> ${descriptionCard} </p> <div class="absolute bottom-0 left-0 right-0 bg-[#004688] xl:h-[57px] h-[42px] rounded-b-2xl z-5 opacity-80"></div> </div>`;
}, "D:/Repositorios/astro-resend/src/utils/card.astro", void 0);

const blessIcon = new Proxy({"src":"/_astro/bless.BV-0VXqM.svg","width":800,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/bless.svg";
							}
							
							return target[name];
						}
					});

const bibleIcon = new Proxy({"src":"/_astro/bible.mZWY6fiP.svg","width":64,"height":64,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/bible.svg";
							}
							
							return target[name];
						}
					});

const palomaIcon = new Proxy({"src":"/_astro/pigeon.BvTbyvb0.svg","width":200,"height":200,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/pigeon.svg";
							}
							
							return target[name];
						}
					});

export { $$Card as $, blessIcon as a, bibleIcon as b, palomaIcon as p };
