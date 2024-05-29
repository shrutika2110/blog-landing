import RelatedBlogs from "./relatedBlogs";

interface Props {
    blogsData?: any;
}

export default function SecFoldBlogs({blogsData}: Props) {
    const otherBlogs = blogsData && blogsData.slice(7, 13);

    return (
            <>
                <RelatedBlogs blogsData={otherBlogs} />
            </>
    );
};
