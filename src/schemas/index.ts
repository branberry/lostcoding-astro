import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
export const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});
