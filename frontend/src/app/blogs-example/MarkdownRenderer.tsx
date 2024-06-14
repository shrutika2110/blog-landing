import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

interface MarkdownRendererProps {
    content: string; // Assuming content is a string of Markdown text
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                img: ({ node, ...props }) => (
                    <div className="image-container">
                        <Image
                            src={String(props.src)} // Ensure src is a string (type casting if necessary)
                            width={600} // Adjust width as per your design
                            height={400} // Adjust height as per your design
                            fill={false}
                        />
                    </div>
                ),
                h2: ({ node, ...props }) => <h2 className="heading">{props.children}</h2>,
                // Add more components as needed (e.g., h1, h3, p, etc.)
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;