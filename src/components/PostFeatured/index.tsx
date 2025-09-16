import { formatDateTime } from '@/utils/format-datetime';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

export async function PostFeatured() {
    const posts = await findAllPublicPosts()
    const post = posts[0]
    const postLink = `/post/${post.slug}`;

    return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      />

      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2025-04-20'
        >
          {formatDateTime(post.createdAt)}
        </time>

        <PostSummary
            postLink={postLink}
            postHeading='h1'
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            title={post.title}>
        </PostSummary>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
          dolorem est dolor porro, doloribus neque, quidem mollitia doloremque,
          ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis
          mollitia?
        </p>
      </div>
    </section>
  );
}
