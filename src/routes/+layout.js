export const prerender = true;

// Emits resume/index.html rather than resume.html, so /resume resolves on every
// static host without relying on host-specific clean-URL rewrites.
export const trailingSlash = 'always';
