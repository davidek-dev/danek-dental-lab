import { renderers } from '../renderers.mjs';
import { onRequest } from '../_empty-middleware.mjs';
import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { manifest } from '../manifest_f95aafe1.mjs';

const page = () => import('../chunks/pages/generic_d93f9f7a.mjs').then(n => n.g);

const pageModule = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	onRequest,
	page,
	renderers
}, Symbol.toStringTag, { value: 'Module' }));

const _manifest = Object.assign(manifest, {
	pageModule,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageModule };