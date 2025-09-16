//import { postRepository } from "@/repositories/post"
import { PostHeading } from "../PostHeading"
import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime"
//import { PostModel } from "@/models/post/post-model";

type PostSummaryProps = {
    postHeading: 'h1' | 'h2';
    postLink: string;
    createdAt: string;
    title: string;
    excerpt: string
}

export async function PostSummary({postHeading, postLink, createdAt, title, excerpt}: PostSummaryProps) {
//    const post = await postRepository.findAll()
    return (
        <div className='flex flex-col gap-4 sm:justify-center'>
            <time
            className='text-slate-600 block text-sm/tight'
            dateTime={createdAt}
            title={formatRelativeDate(createdAt)}
            >
            {formatDateTime(createdAt)}
            </time>

            <PostHeading as={postHeading} url={postLink}>
            {title}
            </PostHeading>

            <p>{excerpt}</p>
        </div>
    )
}
