import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    company: z.string(),
    jobTitle: z.string(),
    years: z.number(),
  }),
});

export const collections = {
  experiences: experienceCollection,
};
