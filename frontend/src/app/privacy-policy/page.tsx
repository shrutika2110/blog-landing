
import { PrivacyPolicyService } from "@/service";
import type { Metadata } from 'next'
import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import ReactMarkdown from "react-markdown";
import Breadcrumb from "@/components/utility/breadcrumb";
import { formatDate } from "@/lib/helpers";

export const metadata: Metadata = {
    title: 'Kofuku - Privacy Policy',
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
    const crumbs = [{ title: 'Home', path: '/' }, { title: 'Privacy Policy' }];

    const policyData = await fetchPolicyData();

    return (
        <div className="relative font-overpass">
            <div className="container py-12">
                <Breadcrumb crumbs={crumbs}/>
                <Heading level={1}  className="xl:text-6xl text-blank mt-4" >
                    {policyData.attributes.title}
                </Heading>
                <div className="pt-12">
                    <ReactMarkdown className="text-lg">
                        {policyData.attributes.description}
                    </ReactMarkdown>
                    <Text size="md" variant="light">
                        <p className="py-2 lg:py-0">
                        Last updated: {formatDate(policyData?.attributes?.publishedAt)}
                        </p>
                    </Text>
                </div>



            </div>
        </div>
    );
}

