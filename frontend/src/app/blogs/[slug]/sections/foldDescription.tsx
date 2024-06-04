
interface Props {
    foldDetails?: any;
}

export default function FoldDescription({foldDetails}:Props) {
    return (
        <>
            {foldDetails?.description && 
                <div className="xl:columns-2 mb-10 text-lg mt-5">
                    {foldDetails?.description}
                </div>
            }
        </>
    );
};
