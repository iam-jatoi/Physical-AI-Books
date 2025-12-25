# Quickstart Guide for Physical AI Book

## Getting Started

This guide will help you set up and run the Physical AI Book locally on your machine.

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Navigate to the website directory**
   ```bash
   cd website
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   - The site will be available at `http://localhost:3000`
   - The site will automatically reload when you make changes to the content

### Project Structure Overview

```
website/
├── docusaurus.config.js    # Main Docusaurus configuration
├── sidebars.js             # Navigation sidebar configuration
├── static/                 # Static assets (images, files)
├── src/
│   ├── components/         # Custom React components
│   └── pages/              # Additional pages
├── docs/                   # Documentation content
│   └── physical-ai-book/   # Physical AI Book content
│       └── ...             # Chapter and lesson files
└── package.json            # Project dependencies and scripts
```

### Adding New Content

To add a new lesson or chapter:

1. Create a new Markdown file in the `docs/physical-ai-book/` directory
2. Add the appropriate frontmatter:
   ```markdown
   ---
   title: Lesson Title
   description: Brief description of the lesson
   sidebar_position: 1
   ---
   ```

3. Update the `sidebars.js` file to include your new content in the navigation

### Running Tests

To run the content validation tests:

```bash
npm test
# or
yarn test
```

### Building for Production

To build the static site for deployment:

```bash
npm run build
# or
yarn build
```

The built site will be available in the `build/` directory.

### Deployment

The built site can be deployed to any static hosting service like GitHub Pages, Netlify, or Vercel. For GitHub Pages, you can use:

```bash
npm run deploy
# or
yarn deploy
```

### Troubleshooting

- **Port already in use**: If port 3000 is already in use, Docusaurus will automatically try the next available port.
- **Dependency issues**: If you encounter dependency issues, try clearing the cache and reinstalling:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- **Content not showing**: Make sure your Markdown files have the proper frontmatter and are referenced in `sidebars.js`.