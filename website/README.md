# Physical AI Book

Welcome to the Physical AI Book, an accessible learning resource designed to demystify AI systems that interact with the physical world through robotics, sensors, and real-world applications.

## About the Book

This comprehensive resource covers the fundamentals of Physical AI - AI systems that interact directly with the physical world. Unlike traditional AI systems that operate primarily in digital spaces, Physical AI systems must perceive, reason about, and act upon real-world environments. This includes:

- Robots that navigate physical spaces
- Autonomous vehicles that respond to traffic conditions
- Smart sensors that monitor environmental conditions
- Industrial systems that control physical processes
- Assistive technologies that interact with humans in physical space

## Target Audience

This book is designed for beginner to intermediate learners who want to understand, implement, and experiment with AI systems that interact with the physical world. We assume you have basic programming knowledge but provide comprehensive introductions to specialized topics in Physical AI.

## Book Structure

The book is organized into chapters and lessons that build upon each other:

- **Chapter 1**: Introduction to Physical AI - Understanding the fundamentals of AI systems that interact with the physical world, including sensors, actuators, and real-world applications
  - Lesson 1.1: Foundations of Physical AI
  - Lesson 1.2: Sensors and Perception
  - Lesson 1.3: Actuators and Control

## Getting Started

To run this documentation site locally:

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Contributing

We welcome contributions to improve the Physical AI Book. Please see our contributing guidelines in the documentation.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
