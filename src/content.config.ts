import {defineCollection, z} from "astro:content";
import {glob, file} from "astro/loaders";


const posts = defineCollection({
    loader: glob({pattern: "*.md", base: "src/content/posts"}),
    schema: z.object({
        title: z.string().max(50),
        description: z.string().max(200),
        authors: z.array(z.string().max(30)),
        reading: z.number().int(),
        topicTags: z.array(z.string()),
        date: z.string(), // or z.date() if you want native Date parsing
        relatedArticles: z.array(z.string()),
        previewImagePath: z.string()
    })
});

const authors = defineCollection({
    loader: file("src/content/authors/authors.json"),
    schema: z.object({
        slug: z.string().max(30),
        name: z.string(),
        username: z.string(),
        description: z.string(),
        articles: z.array(z.string()),
        tags: z.array(z.string()),
        github: z.string(),
        website: z.string(),
        profile_image: z.string(),

    })
})

export const collections = {posts, authors};
