import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';

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
                        <span className="block">
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