import Image from "next/image";

import Heading from "@/components/composite/Heading";

export default function NotFound() {


    return (
        <div className="container relative py-18">
            <div className="relative h-200 w-200 mx-auto">
                <Image src="/images/error.svg" alt="error" fill={true} />
            </div>
            <div className="mx-auto text-center">
                <Heading level={1}>Caution!</Heading>
            </div>
        </div>

    );
}

