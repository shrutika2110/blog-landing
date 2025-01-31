
import Image from "next/image";
import Text from "@/components/composite/Text";
import Link from "next/link";
import SocialIconList from "@/components/utility/socialIcons";
import { SocialService } from "@/service";

async function fetchSocialData() {
    try {
        const { data } = await SocialService();
        const content = data.socials.data;
        return content
    }
    catch (e: any) {
        console.log("error:\n", e.message);
    }
}

export default async function Footer() {

    const socialData = await fetchSocialData();

    return (
        <footer className="bg-blue-400 p-5 py-12 xl:p-16 text-white">
            <div className="container ">
                <div className="max-w-174 mx-auto text-center">
                    <div className="relative h-12 w-44 mx-auto">
                        <Image src="/images/logoWhite.svg" alt="logo" fill={true} />
                    </div>
                    <div className="border border-white py-3 px-6 mt-14   flex flex-col gap-2.5 leading-7">
                        <Text size="lg" className="font-extrabold">Disclaimer</Text>
                        <Text>
                            We are those little posters you stop and stare at, while mulling over the stock exchange
                            – the ones that remind you of your dog’s wagging tail. We tell you the real things about
                            health, while putting a smile on your face!
                        </Text>
                        <Text>
                            Always seek proper professional help to diagnose and treat your medical conditions.
                            Do not use the information we provide for self-diagnosis and self-cure.
                        </Text>
                    </div>
                    <div className="flex gap-4 justify-around items-center my-5">
                        <Link href="/about-us" className="text-sm lg:text-lg font-semibold">About us</Link>
                        <Link href="/terms-conditions" className="text-sm lg:text-lg font-semibold">Terms & Conditions</Link>
                        <Link href="/privacy-policy" className="text-sm lg:text-lg font-semibold">Privacy Policies</Link>
                    </div>
                    
                    <SocialIconList socialData={socialData} />
                    
                    <Text size="lg" className="font-bold">
                        @ Kofuku Technologies
                    </Text>
                </div>

            </div>
        </footer>
    );
};
