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
                        <blockquote className="mx-4 my-0 italic pl-4 border-l-4 border-offwhite-700 text-black-700 mb-2" {...props} />
                    ),
                    code: ({ node, ...props }) => (
                        <code className="text-wrap text-primary px-4 py-2 rounded text-sm bg-white-300" {...props} />
                    ),
                    ul: ({ node, ...props }) => <ul className="list-disc pl-8">{props.children}</ul>,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-8">{props.children}</ol>,
                    li: ({ node, ...props }) => <li className="mb-2">{props.children}</li>,
                    p: ({ node, ...props }) => <p className="mb-2">{props.children}</p>,
                    h1: ({ node, ...props }) => <h1 className='text-5xl'>{props.children}</h1>,
                    h2: ({ node, ...props }) => <h2 className='text-4xl'>{props.children}</h2>,
                    h3: ({ node, ...props }) => <h3 className='text-2xl'>{props.children}</h3>,
                    h4: ({ node, ...props }) => <h4 className='text-lg'>{props.children}</h4>,
                    h5: ({ node, ...props }) => <h5 className='text-md'>{props.children}</h5>,
                    h6: ({ node, ...props }) => <h6 className='text-base'>{props.children}</h6>,
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