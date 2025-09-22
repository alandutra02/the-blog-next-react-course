import { findPostBySlugCached } from "@/lib/post/queries"
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkDown } from "../SafeMarkDown";

type SinglePostProps = {
    slug: string
}

export default async function SinglePost({slug}: SinglePostProps) {
    const post = await findPostBySlugCached(slug)

    return (
        <article className="mb-16">
            <header className="group flex flex-col gap-4 mb-4">
                <Image
                    src={post.coverImageUrl}
                    width={1200}
                    height={720}
                    alt={post.title}
                    className="rounded-xl"
                    priority={true}
                />

                <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

                <p>
                    {post.author} | <PostDate dateTime={post.createdAt} />
                </p>
            </header>

                <p className="mb-4 text-xl text-slate-600">
                    {post.excerpt}
                </p>

                <SafeMarkDown markdown={post.content} />
        </article>
    );
}
