
interface Props {
    foldDetails?: any;
}

export default function FoldDescription({foldDetails}:Props) {

    return (
        <div className="lg:columns-2 my-5 text-lg">
            {foldDetails?.description}
        </div>
    );
};
