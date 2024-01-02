export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon/favicon.ico","styles/smui.css"]),
	mimeTypes: {".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.MnH8s7nv.js","app":"_app/immutable/entry/app.0DAgGg2S.js","imports":["_app/immutable/entry/start.MnH8s7nv.js","_app/immutable/chunks/scheduler.q5NtudTK.js","_app/immutable/chunks/singletons.DrTs2kH2.js","_app/immutable/chunks/index.t9Wca4fO.js","_app/immutable/entry/app.0DAgGg2S.js","_app/immutable/chunks/scheduler.q5NtudTK.js","_app/immutable/chunks/index.xkiXua0R.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/[locale]/(app)",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[locale]/(app)/ai",
				pattern: /^\/([^/]+?)\/ai\/?$/,
				params: [{"name":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[locale]/(app)/blog",
				pattern: /^\/([^/]+?)\/blog\/?$/,
				params: [{"name":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[locale]/(app)/promotions",
				pattern: /^\/([^/]+?)\/promotions\/?$/,
				params: [{"name":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[locale]/(app)/top",
				pattern: /^\/([^/]+?)\/top\/?$/,
				params: [{"name":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
