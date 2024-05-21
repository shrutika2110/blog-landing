
import Image from "next/image";

export default function Header() {

    return (
        <header className="py-5">
            <div className="container ">
                    <div className="relative w-18.5 h-5 lg:h-12 lg:w-44 ">
                        <Image src="/images/logo.svg" alt="logo" fill={true} />
                    </div>
            </div>
        </header>
    );
};
