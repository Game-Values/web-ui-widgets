const handle = ({ event, resolve }) => resolve(event, {
  transformPageChunk: ({ html }) => html.replace(
    "%unocss-svelte-scoped.global%",
    "unocss_svelte_scoped_global_styles"
  )
});
export {
  handle
};
