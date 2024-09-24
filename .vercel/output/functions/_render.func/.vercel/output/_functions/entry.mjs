import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BJ2dFGKc.mjs';
import { manifest } from './manifest_CaPqyJLP.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page2 = () => import('./pages/contactanos.astro.mjs');
const _page3 = () => import('./pages/creencias.astro.mjs');
const _page4 = () => import('./pages/dar.astro.mjs');
const _page5 = () => import('./pages/equipo.astro.mjs');
const _page6 = () => import('./pages/nosotros.astro.mjs');
const _page7 = () => import('./pages/videos.astro.mjs');
const _page8 = () => import('./pages/visitanos.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/sendEmail.json.ts", _page1],
    ["src/pages/contactanos.astro", _page2],
    ["src/pages/creencias.astro", _page3],
    ["src/pages/dar.astro", _page4],
    ["src/pages/equipo.astro", _page5],
    ["src/pages/nosotros.astro", _page6],
    ["src/pages/videos.astro", _page7],
    ["src/pages/visitanos.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "170d8604-98b6-40c1-95ea-2b954646ee0c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
