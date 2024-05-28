import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import Link from "next/link";
import { FaCopy, FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function HeroSection() {
    

    return (
        <>
            <div className="border-l-10 border-primary pl-8 mt-5 mb-10">
               <Heading level={1} className="text-skyBlue-400 text-4xl lg:text-5.5xl font-inter lg:leading-14.5 lg:max-w-10/12">
                    Hypertension- causes, complications and cure space for longer text :
               </Heading>
               <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
                    <Text variant="light" size="lg" className="mt-3 font-inter text-xl lg:text-3xl text-black-300 leading-8.75">
                        The basics and most crucial shots
                    </Text>
                    <div className="flex gap-10 text-primary ">
                        <Link href="/" className="text-3xl">
                             <FaFacebook  />
                        </Link>
                        <Link href="/" className="text-3xl">
                            <FaWhatsapp  />
                        </Link>
                        <Link href="/" className="text-3xl">
                            <FaXTwitter  />
                        </Link>

                        <Link href="/" className="text-3xl">
                            <FaCopy  />
                        </Link>
                    </div>
               </div>
            </div>
            <div className="h-120 w-full relative">
                <Image src="/images/blogImg2.svg" alt="Blog Cover Image" className="object-cover" fill={true} />
            </div>
            <div className="lg:columns-2 my-5 text-lg">
                Unvaccinated seniors are at increased risks of falling sick or dying due to unvaccinated seniors die annually. Many adults hesitate from taking vaccines or worry about side effects. But people above age 65 can develop complications from the disease itself instead of the side effects of the vaccines in elderly.It is crucial for older adults to stay updated on the latest vaccines. If we assume older generations did not receive vaccines as the newer generation, new vaccinations are now available that can prevent some diseases from developing life-threatening complications among seniors.
                As immunity fades, it becomes harder to fight off infections without vaccines for old people. The infections like flu, tetanus, shingles, pneumonia, whooping cough, diphtheria and COVID-19 can lead to serious illness, hospitalization and even worse.
                As immunity fades, it becomes harder to fight off infections without vaccines for old people. The infections like flu, tetanus, shingles, pneumonia, whooping cough, diphtheri
            </div>
        </>
    );
};
