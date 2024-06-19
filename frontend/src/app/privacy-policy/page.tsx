
import { PrivacyPolicyService } from "@/service";
import type { Metadata } from 'next'
import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import Breadcrumb from "@/components/utility/breadcrumb";
import { formatDate } from "@/lib/helpers";
import MarkdownRenderer from "@/components/utility/MarkDownRenderer";

const commonTitle = 'Kofuku - Privacy Policy';
const commonDescription = 'Kofuku is a one of a kind social media platform for healthcare. Talk about all things health, lifestyle and wellness by joining Kofuku and explore a content sharing search engine where you can read, write, share and more';


export const metadata: Metadata = {
  title: commonTitle,
  description: commonDescription,
  openGraph: {
    title: commonTitle,
    description: commonDescription,
    images: [
      {
        url: "og-image.jpg",
        width: 800, 
        height: 600,
      }
    ],
  },
  twitter: {
    title: commonTitle,
    description: commonDescription,
    images: [
      {
        url: "og-image.jpg",
        width: 800, 
        height: 600,
      }
    ],
  },
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
        <div className="relative">
            <div className="container py-12">
                <Breadcrumb crumbs={crumbs}/>
                <Heading level={1}  className="xl:text-6xl text-blank mt-4" >
                    {policyData.attributes.title}
                </Heading>
                <div className="pt-12 text-lg">
                    <MarkdownRenderer content={policyData.attributes.description}>
                    </MarkdownRenderer>
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

