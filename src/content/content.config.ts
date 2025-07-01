import {defineCollection, z} from "astro:content";
import {glob, file} from "astro/loaders";


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

const authors = defineCollection({
    loader: file("./authors.json"),
    schema: z.object({
        name: z.string().max(50),
        username: z.string().max(50),
        description: z.string().max(200),
        articles: z.array(z.string()),
        tags: z.array(z.string()),
        github: z.string().max(200),
        website: z.string().max(200),
        profile_image: z.string().max(200),
    })
})

export const collections = {posts, authors};
