import RelatedBlogs from "./relatedBlogs";

interface Props {
    blogsData?: any;
}

export default function FirstFoldBlogs({blogsData}: Props) {
    const otherBlogs = blogsData && blogsData.slice(0, 6);

    return (
            <div className="pt-5 mt-3 mb-14" >
                <RelatedBlogs blogsData={otherBlogs} />
            </div>
    );
};
