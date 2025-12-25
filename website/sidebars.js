// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Define the tutorial sidebar manually for our Physical AI Book
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Physical AI Book',
      items: [
        'physical-ai-book/intro',
        {
          type: 'category',
          label: 'Chapter 1: Introduction to Physical AI',
          items: [
            'physical-ai-book/chapter-1/index',
            'physical-ai-book/chapter-1/lesson-1',
            'physical-ai-book/chapter-1/lesson-2',
            'physical-ai-book/chapter-1/lesson-3'
          ],
        },
        'physical-ai-book/style-guide',
        // Future chapters will be added here
      ],
    },
  ],
};

export default sidebars;
