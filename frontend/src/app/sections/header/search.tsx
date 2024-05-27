import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";


export default function Search() {

    return (
        <div className="relative w-7/12 lg:w-67.5">
            <div className="absolute top-2 left-2.5">
                <FiSearch className="text-primary" size={20} />
            </div>
            <div className="bg-search-grad rounded-lg p-px">
                <Input className="pl-10 pr-14 h-9 rounded-1.75 border-none " placeholder="Search kōfuku" />
            </div>
            <div className="h-9 w-9 bg-gray-150 rounded-full absolute right-0 top-px flex text-white justify-center items-center cursor-pointer transition-all duration-200 hover:bg-primary">
                <FaArrowRightLong size={16} />
            </div>
        </div>
    );
};
