
interface Props {
    foldDetails?: any;
}

export default function FoldDescription({foldDetails}:Props) {
    return (
        <>
            {foldDetails?.description && 
                <div className="lg:columns-2 mb-10 text-lg">
                    {foldDetails?.description}
                </div>
            }
        </>
    );
};
