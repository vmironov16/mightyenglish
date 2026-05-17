import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const skillsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    icon: z.string(),
  }),
});

export const collections = {
  about: aboutCollection,
  skills: skillsCollection,
};
