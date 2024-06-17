import Heading from "@/components/composite/Heading";
import MarkdownRenderer from "@/components/utility/MarkDownRenderer";

interface Props {
    foldDetails?: any;
}

export default function FoldDescription({foldDetails}:Props) {
    return (
        <div className="flex flex-col gap-4 my-5">
            {foldDetails?.Title && 
                    <Heading level={3} className="">
                         {foldDetails?.Title}
                    </Heading>
                   
            }
            {foldDetails?.description && 
                    <div className="xl:columns-2 gap-5 text-lg">
                        <MarkdownRenderer content={foldDetails?.description}>
                        </MarkdownRenderer>
                    </div>
                   
            }
        </div>
    );
};
