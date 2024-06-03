import Image from "next/image";

import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {


    return (
        <div className="container relative py-18">
            <div className="relative h-80 w-80 lg:h-120 lg:w-120 xl:h-200 xl:w-200 mx-auto">
                {/* <Image src="/images/error.svg" alt="error" fill={true} /> */}
                <video
                    autoPlay
                    muted
                    loop
                    src="/images/404.mp4"
                ></video>
            </div>
            <div className="mx-auto text-center max-w-129 mb-20">
                <Heading level={1} variant="light">Caution!</Heading>
                <Text size="lg" className="my-10 font-semibold text-black-300" variant="light" >
                The road is temporarily closed and you are requested to turn back and head home. This road also goes to Rome but right now, it stops somewhere in Kashmir!
                </Text>
                <Button asChild >
                    <Link href="/">
                           Go Back
                    </Link>
                </Button>
            </div>
        </div>

    );
}

