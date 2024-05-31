import SearchDropdownBlog from "./searchDropdownBlog";
import SearchDropdownVideo from "./searchDropdownVideo";

interface Props {
    results?: any;
}


export default function SearchDropdown({results}: Props) {
    return (
            <div className="absolute right-0 top-12 w-full min-w-67.5 min-h-20 max-h-50 overflow-y-auto bg-gray-900 rounded-md shadow-xl py-4 px-2.5">
                <div className="p-4 text-center absolute z-0 w-full top-0 left-0">
                        Searching...
                </div>
                <div className="flex flex-col gap-3 py-1 relative z-10">
                        {results && results.slice(0, 3).map((post:any, index:any) => (
                            <div key={index}>
                                {post.type == "youtube" ?
                                    <SearchDropdownVideo post={post} />
                                     : 
                                    <SearchDropdownBlog post={post} />
                                }
                            </div>
                        ))}
                    </div>
            </div>
    );
};
