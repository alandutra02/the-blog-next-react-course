import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzlePostRepository implements PostRepository {
    async findAllPublic(): Promise<PostModel[]>{
        const posts =  drizzleDb.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
            where: (posts, { eq }) => eq(posts.published, true)
        });
        return posts;

    }
    async findBySlugPublic(slug: string): Promise<PostModel>{
        const post = await drizzleDb.query.posts.findFirst({
            where: (posts, { eq, and }) =>
                and(eq(posts.published, true), eq(posts.slug, slug))
        });
        if (!post) throw new Error('Post não encontrado para o slug: ' + slug);
        return post;
/*         console.log(post.toSQL().sql);
        console.log(post.toSQL().params); */
    }
    async findAll(): Promise<PostModel[]>{
        const posts =  drizzleDb.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
        });
        return posts;
    }
    async findById(id: string): Promise<PostModel>{
        const post =await  drizzleDb.query.posts.findFirst({
            where: (posts, { eq }) => eq(posts.id, id)
        });
        if (!post) throw new Error('Post não encontrado para o id: ' + id);
        return post
    }
  }

/*   (async() => {
    const repo = new DrizzlePostRepository(); */
   /*  const posts = await repo.findAllPublic();
    posts.map(post => console.log(post.slug, post.published)); */
/*     const result = await repo.findById('99f8add4-7684-4c16-a316-616271db199');
    console.log(result);

  })() */
