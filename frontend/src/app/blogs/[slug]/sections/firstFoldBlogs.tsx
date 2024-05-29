import RelatedBlogs from "./relatedBlogs";

interface Props {
    blogsData?: any;
}

export default function FirstFoldBlogs({blogsData}: Props) {
    const otherBlogs = blogsData && blogsData.slice(0, 6);

    return (
            <>
                <RelatedBlogs blogsData={otherBlogs} />
            </>
    );
};
