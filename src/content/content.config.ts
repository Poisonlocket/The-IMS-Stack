import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";


const posts = defineCollection({
    loader: glob({pattern: "*.md", base: "./posts"}),
    schema: z.object({
        title: z.string().max(50),
        description: z.string().max(200),
        author: z.string().max(30),
        reading: z.number().int(),
        topicTags: z.array(z.string()),
        date: z.string(), // or z.date() if you want native Date parsing
        relatedArticles: z.array(z.string()),
        previewImagePath: z.string()
    })
});

export const collections = {posts};
