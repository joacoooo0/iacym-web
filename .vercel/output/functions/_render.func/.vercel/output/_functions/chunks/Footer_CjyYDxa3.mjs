import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, e as addAttribute, f as renderHead, g as renderSlot, b as createAstro } from './astro/server_Dt8JLDlx.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_FJ9IOFiB.mjs';
import 'clsx';
/* empty css                               */

const iglesiaIconWhite = new Proxy({"src":"/_astro/logo-transparente.DtKBPZNH.png","width":1500,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/logo-transparente.png";
							}
							
							return target[name];
						}
					});

const Line = new Proxy({"src":"/_astro/lines.Dbfi6sSd.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/lines.svg";
							}
							
							return target[name];
						}
					});

const buttonX = new Proxy({"src":"/_astro/button-x.BcVOpAAY.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/button-x.svg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-[#004688] px-10 py-4 text-white font-sora relative z-50"> <nav class="flex justify-between items-center"> <ul class="flex items-center justify-center"> <a href="/">${renderComponent($$result, "Image", $$Image, { "src": iglesiaIconWhite, "alt": "logoIglesia_CasadeVida", "width": 120 })}</a> </ul> <ul> <button class="lg:hidden" id="menu-button"> <img id="menu-icon" class="flex justify-center items-center transition-transform duration-300"${addAttribute(Line.src, "src")} alt="button-lines"> <img id="close-icon" class="hidden transition-transform duration-300"${addAttribute(buttonX.src, "src")} alt="button-x"> </button> </ul> <ul class="hidden lg:flex items-center gap-x-10"> <li class="group relative w-max"> <a href="/">Inicio</a> <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> </li> <li class="group relative w-max"> <a href="/nosotros">Nosotros</a> <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> </li> <li class="group relative w-max"> <a href="/creencias">Creencias</a> <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> </li> <li class="group relative w-max"> <a href="/equipo">Equipo</a> <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> </li> <li class="group relative w-max"> <a href="/contactanos">Contáctanos</a> <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> </li> <li class="group relative w-max"> <a href="/visitanos">Visítanos</a> <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> </li> <li class="group relative w-max"> <a href="/videos">Videos</a> <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> </li> <li class="group relative w-max"> <a href="/dar">Dar</a> <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span> </li> </ul> <ul id="menu-open" class="lg:hidden bg-[#000000] bg-opacity-75 rounded-xl p-5 fixed right-10 top-28 hidden z-50"> <div class="flex flex-col justify-center items-end gap-y-3"> <li><a href="/">Inicio</a></li> <li><a href="/nosotros">Nosotros</a></li> <li><a href="/creencias">Creencias</a></li> <li><a href="/equipo">Equipo</a></li> <li><a href="/contactanos">Contáctanos</a></li> <li><a href="/visitanos">Visítanos</a></li> <li><a href="/videos">Videos</a></li> <li><a href="/dar">Dar</a></li> </div> </ul> </nav> </header> `;
}, "D:/Repositorios/astro-resend/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/src/assets/logo-transparente.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Iglesia Casa de Vida</title>${renderHead()}</head> <body class="font-sora"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Repositorios/astro-resend/src/layouts/Layout.astro", void 0);

const mapsIcon = new Proxy({"src":"/_astro/maps.B6QK0H9d.svg","width":200,"height":200,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Repositorios/astro-resend/src/assets/maps.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#004688] lg:h-[370px] lg:flex lg:justify-between items-center py-14 sm:px-28 px-12 text-white"> <div class="flex flex-col lg:items-start items-center lg:text-start text-center lg:pb-0 pb-16"> ${renderComponent($$result, "Image", $$Image, { "src": iglesiaIconWhite, "alt": "", "class": "w-48 mb-5" })} <p class="sm:text-[15px] text-[11px] font-normal max-w-xs">
Casa de Vida es una iglesia donde amamos ver vidas cambiadas por Jesús.
      Creemos que su Palabra hace la obra y nos encantaría que esta sea una
      realidad en tu vida.
</p> </div> <div class="flex flex-col lg:items-start items-center lg:text-start text-center mb-5"> <h1 class="font-bold text-xl mb-3">Contacto</h1> <div class="flex items-start justify-center mb-3"> ${renderComponent($$result, "Image", $$Image, { "src": mapsIcon, "alt": "maps-icon-footer", "class": "w-8" })} <h3 class="sm:text-[15px] text-[12px] font-normal ml-1 w-72">
C. Afueras a Valverde, 27, Fuencarral-El Pardo, 28034 Madrid, España
</h3> </div> <!-- <div class="flex items-center justify-center">
      <Image src={emailIcon} alt="email-icon-footer" class="w-8" />
      <h3 class="sm:text-[15px] text-[12px] font-normal ml-1">
        informes@iacym-casadevida.com
      </h3>
    </div> --> </div> </footer>`;
}, "D:/Repositorios/astro-resend/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a, $$Layout as b };
