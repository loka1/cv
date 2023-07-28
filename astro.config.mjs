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
            disableIdentityWidgetInjection: true,
            adminPath: "vRVzLsEZ3eDIrIaRBYcVF",
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
                      label_singular: 'Blog Post',
                      folder: 'src/content/blog',
                      create: true,
                      delete: true,
                      fields: [
                          { name: 'title', widget: 'string', label: 'Post Title' },
                          {
                              name: 'publishDate',
                              widget: 'datetime',
                              format: 'DD MMM YYYY',
                              date_format: 'DD MMM YYYY',
                              time_format: false,
                              label: 'Publish Date',
                          },
                          { name: 'author', widget: 'string', label: 'Author Name', required: false },
                          { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
                          { name: 'description', widget: 'string', label: 'Description', required: false },
                          { name: 'body', widget: 'markdown', label: 'Post Body' }
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