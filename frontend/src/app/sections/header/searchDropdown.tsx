import SearchDropdownBlog from "./searchDropdownBlog";
import SearchDropdownVideo from "./searchDropdownVideo";
import Text from "@/components/composite/Text";

interface Props {
    results?: any;
    query ?: any;
}


export default function SearchDropdown({results, query}: Props) {
    return (
            <div className="absolute right-0 top-12 w-full min-w-67.5 min-h-20 max-h-50 overflow-y-auto bg-gray-900 rounded-md shadow-xl py-4 px-2.5">
                <div className="p-4 text-center absolute z-0 w-full top-0 left-0">
                    Searching...
                </div>
                <div className="flex flex-col gap-3 py-1 z-10 bg-gray-900 relative">
                        {results.length > 0 ? 
                            results.slice(0, 3).map((post:any, index:any) => (
                                <div key={index}>
                                    {post.type == "youtube" ?
                                        <SearchDropdownVideo post={post} />
                                        : 
                                        <SearchDropdownBlog post={post} />
                                    }
                                </div>
                            ) )
                            : 
                            <div className="p-4 text-center">
                                <Text variant="light" >We were not able to find anything related "{query}"</Text>
                            </div>
                        }
                    </div>
            </div>
    );
};
