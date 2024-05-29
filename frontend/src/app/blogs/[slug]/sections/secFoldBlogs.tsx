import RelatedBlogs from "./relatedBlogs";

interface Props {
    blogsData?: any;
}

export default function SecFoldBlogs({blogsData}: Props) {
    const otherBlogs = blogsData && blogsData.slice(7, 13);

    return (
            <div className="pt-5 mt-5" >
                <RelatedBlogs blogsData={otherBlogs} />
            </div>
    );
};
