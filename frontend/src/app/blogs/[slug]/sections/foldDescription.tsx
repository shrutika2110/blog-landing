import Heading from "@/components/composite/Heading";
import ReactMarkdown from "react-markdown";

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
                    <ReactMarkdown className="markdown xl:columns-2 gap-5 text-lg">
                         {foldDetails?.description}
                    </ReactMarkdown>
                   
            }
        </div>
    );
};
