
'use client'
import { IoIosArrowRoundUp } from "react-icons/io";

export default function BackToTop() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
       <div onClick={scrollToTop}  className="absolute right-0 lg:-right-3 xl:-right-5 -bottom-9 lg:bottom-3 xl:bottom-124 cursor-pointer h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-white rounded bg-blue-250 flex items-center justify-center">
            <IoIosArrowRoundUp size={28} />
       </div>
    );
};
