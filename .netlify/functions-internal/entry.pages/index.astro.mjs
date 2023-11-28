import { renderers } from '../renderers.mjs';
import { onRequest } from '../_empty-middleware.mjs';
import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { manifest } from '../manifest_666f11d1.mjs';

const page = () => import('../chunks/pages/index_36bcbf30.mjs').then(n => n.i);

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
