import RelatedBlogs from "./relatedBlogs";

interface Props {
    blogsData?: any;
}

export default function Blogs({blogsData}: Props) {
    return (
            <div className="pt-5 mt-3 mb-14" >
                <RelatedBlogs  blogsData={blogsData} />
                <div className="lg:columns-2 my-5 text-lg">
                    Unvaccinated seniors are at increased risks of falling sick or dying due to unvaccinated seniors die annually. Many adults hesitate from taking vaccines or worry about side effects. But people above age 65 can develop complications from the disease itself instead of the side effects of the vaccines in elderly.It is crucial for older adults to stay updated on the latest vaccines. If we assume older generations did not receive vaccines as the newer generation, new vaccinations are now available that can prevent some diseases from developing life-threatening complications among seniors.
elderly.It is crucial for older adults to stay updated on the latest vaccines. If we assume older generations did not receive vaccines as the newer generation, new vaccinations are now available that can prevent some diseases from developing life-threatening complications among seniors.As immunity fades, it becomes harder to fight off infections without vaccines for old people. The infections like flu, tetanus, shingles, pneumonia, whooping cough, diphtheria and COVID-19 can lead to serious illness, hospitalization and even worse.
As immunity fades, it becomes harder to fight off infections without vaccines for old people. The infections like flu, tetanus, shingles, pneumonia, whooping cough, diphtherielderly.It is crucial for older adults to stay updated on the latest vaccines. If we assume older generations did not receive vaccines as the newer generation, new vaccinations are now available that can prevent some diseases from developing life-threatening complications among seniors.
                </div>
                <RelatedBlogs blogsData={blogsData} />
            </div>
    );
};
