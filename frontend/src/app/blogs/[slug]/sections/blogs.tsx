import RelatedBlogs from "./relatedBlogs";

interface Props {
    blogsData?: any;
}

export default function Blogs({blogsData}: Props) {
    return (
            <div className="pt-5 mt-3 mb-14" >
                <RelatedBlogs  blogsData={blogsData} />
            </div>
    );
};
