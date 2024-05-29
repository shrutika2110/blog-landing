import Image from "next/image";

import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";

export default function NullPoint() {

    return (
        <div className="bg-gray-900 w-full py-20 px-6 lg:p-20">
            <div className="container relative">
                <div className="mx-auto text-center">
                    <Heading level={1} variant="light" className="mb-5 text-4.5xl font-extrabold text-black-900">Sorry!</Heading>
                    <Text variant="light" size="lg" className="text-black-900 font-medium">We were not able to find anything related “Hypertension - causes, complicati...”</Text>
                </div>
                <div className="relative h-65 w-65 lg:h-92 lg:w-92 mx-auto">
                    <Image src="/images/nullpoint.svg" alt="error" fill={true} />
                </div>
            </div>
        </div>

    );
}
