

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.v9h1KqIi.js","_app/immutable/chunks/scheduler.q5NtudTK.js","_app/immutable/chunks/index.xkiXua0R.js"];
export const stylesheets = [];
export const fonts = [];
