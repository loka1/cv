import {defineConfig} from 'astro/config';

import prefetch from "@astrojs/prefetch";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
    markdown: {
        drafts: true
    },
    integrations: [
        prefetch({
            // Allow up to three links to be prefetched concurrently
            throttle: 3,
        }),
        NetlifyCMS({
            config: {
                backend: {
                    name: 'git-gateway',
                    branch: 'main',
                },
                media_folder: "/public/assets",
                collections: [
                    // Content collections
                  {
                    name: 'posts',
                    label: 'Blog Posts',
                    folder: 'src/pages/posts',
                    create: true,
                    delete: true,
                    fields: [
                      { name: 'title', widget: 'string', label: 'Post Title' },
                      { name: 'body', widget: 'markdown', label: 'Post Body' },
                    ],
                  },
                  {
                        name: 'projects',
                        label: 'projects Posts',
                        folder: 'src/content/work',
                        create: true,
                        delete: true,
                        fields: [
                            { name: 'title', widget: 'string', label: 'project title' },
                            { name: 'description', widget: 'string', label: 'project description' },
                            { name: 'publishDate', widget: 'datetime', label: 'published date' },
                            { name: 'tags', widget: 'list', label: 'tags' },
                            { name: 'img', widget: 'image', label: 'featured image' },
                            { name: 'img_alt', widget: 'string', label: 'image alt' },
                            { name: 'draft', widget: 'boolean', label: 'draft' },
                            { name: 'body', widget: 'markdown', label: 'Post Body' },
                        ],
                    },
                ],
            },
        }),
    ]
});