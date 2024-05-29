
interface Props {
    foldDetails?: any;
}

export default function FoldDescription({foldDetails}:Props) {
    return (
        <>
            {foldDetails?.description && 
                <div className="lg:columns-2 mt-5 text-lg mb-10">
                    {foldDetails?.description}
                </div>
            }
        </>
    );
};
