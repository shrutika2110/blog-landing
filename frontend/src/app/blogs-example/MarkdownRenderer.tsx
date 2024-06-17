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
                blockquote: ({ node, ...props }) => <blockquote className="blockquote" {...props} />,
                // Add more components as needed (e.g., h1, h3, p, etc.)
            }}
        >
            {content}
        </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;