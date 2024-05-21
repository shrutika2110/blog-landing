
import Image from "next/image";

export default function Footer() {

    return (
        <header className="bg-primary p-20 mt-20">
            <div className="container ">
                    <div className="relative w-18.5 h-5 lg:h-12 lg:w-44 mx-auto">
                        <Image src="/images/logoWhite.svg" alt="logo" fill={true} />
                    </div>
            </div>
        </header>
    );
};
