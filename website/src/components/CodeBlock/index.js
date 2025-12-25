import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// This component provides a copy button for code blocks
function CodeBlock({children, ...props}) {
  const [copied, setCopied] = React.useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <span className="code-language">{props.className?.replace('language-', '') || 'code'}</span>
        <button 
          className={`copy-button ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy code to clipboard"}
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <pre className={props.className}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

// Wrapper that only renders in browser (not during static generation)
export default function CustomCodeBlock(props) {
  return (
    <BrowserOnly>
      {() => <CodeBlock {...props} />}
    </BrowserOnly>
  );
}