import { postRepository } from "@/repositories/post";
import { PostModel } from "@/models/post/post-model";

// Server Component async
export async function PostsList() {
  const posts: PostModel[] = await postRepository.findAll();

  return (
    <div className="space-y-2 p-4">
      {posts.map(post => (
        <p key={post.id} className="text-xl">
          {post.title}
        </p>
      ))}
    </div>
  );
}
