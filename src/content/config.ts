import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  schema: z.object({
    link: z.string(),
    company: z.string(),
    jobTitle: z.string(),
    location: z.string(),
    years: z.string(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    link: z.string(),
    name: z.string(),
  }),
});

export const collections = {
  experiences: experienceCollection,
  projects: projectsCollection,
};
