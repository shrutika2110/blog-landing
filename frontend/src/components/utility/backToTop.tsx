
import { IoIosArrowRoundUp } from "react-icons/io";

export default function BackToTop() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
       <div onClick={scrollToTop}  className="absolute -right-3 xl:-right-5 bottom-3 xl:bottom-124 cursor-pointer h-3.5 w-3.5 xl:h-12 xl:w-12 text-white rounded bg-blue-250 flex items-center justify-center">
            <IoIosArrowRoundUp size={28} />
       </div>
    );
};
