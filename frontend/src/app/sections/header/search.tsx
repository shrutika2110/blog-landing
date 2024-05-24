import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";


export default function Search() {

    return (
        <div className="relative">
            <div className="absolute top-2 left-2.5">
                <FiSearch className="text-primary" size={20} />
            </div>
            <div className="bg-search-grad rounded-lg p-px">
                <Input className="pl-10 pr-14 h-9 rounded-1.75 border-none " placeholder="Search kōfuku" />
            </div>
        </div>
    );
};
