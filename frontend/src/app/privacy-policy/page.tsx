
import { PrivacyPolicyService } from "@/service";
import type { Metadata } from 'next'
import Heading from "@/components/composite/Heading";
import ReactMarkdown from "react-markdown";

export const metadata: Metadata = {
    title: 'Kofuku - privacy policy',
    description: 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more',
}

async function fetchPolicyData() {
    try {
        const { data } = await PrivacyPolicyService();
        const content = data.privacyPolicie.data;
        return content
    }
    catch (e: any) {
        console.log("error:\n", e.message);
    }
}



export default async function Page() {

    const policyData = await fetchPolicyData();

    return (
        <div className="relative ">
            <div className="container py-32">
                <Heading level={1} >
                    {policyData.attributes.title}
                </Heading>
                <div className="pt-12">
                    <ReactMarkdown className="text-lg">
                        {policyData.attributes.description}
                    </ReactMarkdown>
                </div>



            </div>
        </div>
    );
}

