import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    dates: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(0),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    thumbnail: z.string().optional(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { projects };
