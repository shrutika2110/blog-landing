
import { TermsService } from "@/service";
import type { Metadata } from 'next'
import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import ReactMarkdown from "react-markdown";
import { formatDate } from "@/lib/helpers";
import Breadcrumb from "@/components/utility/breadcrumb";

const commonTitle = 'Kofuku - Terms of use';
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

async function fetchTermsData() {
    try {
        const { data } = await TermsService();
        const content = data.term.data;
        return content
    }
    catch (e: any) {
        console.log("error:\n", e.message);
    }
}



export default async function Page() {
    const crumbs = [{ title: 'Home', path: '/' }, { title: 'Terms of use' }];

    const termsData = await fetchTermsData();

    return (
        <div className="relative font-overpass">
            <div className="container py-12">
                <Breadcrumb crumbs={crumbs}/>
                <Heading level={1} className="xl:text-6xl text-blank mt-4" >
                    {termsData.attributes.title}
                </Heading>
                <div className="pt-12">
                    <ReactMarkdown className="text-lg">
                        {termsData.attributes.description}
                    </ReactMarkdown>
                    <Text size="md" variant="light">
                        <p className="py-2 lg:py-0">
                        Last updated: {formatDate(termsData?.attributes?.publishedAt)}
                        </p>
                    </Text>
                </div>
            </div>
        </div>
    );
}

