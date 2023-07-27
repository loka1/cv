import { defineConfig } from 'astro/config';

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [prefetch({
    // Allow up to three links to be prefetched concurrently
    throttle: 3,
  })]
});