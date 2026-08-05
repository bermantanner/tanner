import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Emits plain static files, so the site still deploys to any static host.
    adapter: adapter()
  }
};

export default config;
