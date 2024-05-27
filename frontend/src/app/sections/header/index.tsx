
import Image from "next/image";
import Search from "./search";
import Link from "next/link";

export default function Header() {

    return (
        <header className="py-5 bg-white">
            <div className="container ">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <div className="relative w-18.5 h-5 lg:h-12 lg:w-44 ">
                                <Image src="/images/logo.svg" alt="logo" fill={true} />
                            </div>
                        </Link>
                        <Search />
                    </div>
            </div>
        </header>
    );
};
