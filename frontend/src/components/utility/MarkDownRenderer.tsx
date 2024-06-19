import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
import Heading from '../composite/Heading';

interface MarkdownRendererProps {
    content: any;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    return (
        <div className='markdown'>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    img: ({ node, ...props }) => (
                        <span className="block mb-2">
                            <Image
                                src={String(props.src)}
                                width={600}
                                height={400}
                                fill={false}
                                alt="Image"
                            />
                        </span>
                    ),
                    blockquote: ({ node, ...props }) => (
                        <blockquote className="mx-4 my-0 italic pl-4 border-l-4 border-offwhite-700 text-black-700" {...props} />
                    ),
                    code: ({ node, ...props }) => (
                        <code className="text-wrap text-primary px-4 py-2 rounded text-sm bg-white-300" {...props} />
                    ),
                    ul: ({ node, ...props }) => <ul className="list-disc pl-8">{props.children}</ul>,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-8">{props.children}</ol>,
                    li: ({ node, ...props }) => <li className="mb-2">{props.children}</li>,
                    p: ({ node, ...props }) => <p className="mb-2">{props.children}</p>,
                    h1: ({ node, ...props }) => <Heading level={1}>{props.children}</Heading>,
                    h2: ({ node, ...props }) => <Heading level={2}>{props.children}</Heading>,
                    h3: ({ node, ...props }) => <Heading level={3}>{props.children}</Heading>,
                    h4: ({ node, ...props }) => <Heading level={4}>{props.children}</Heading>,
                    h5: ({ node, ...props }) => <Heading level={5}>{props.children}</Heading>,
                    h6: ({ node, ...props }) => <Heading level={6}>{props.children}</Heading>,
                    a: ({ node, ...props }) => (
                        <a className="text-primary hover:text-sky-800  focus:text-sky-800 visited:text-sky-800" href={props.href}>
                            {props.children}
                        </a>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;