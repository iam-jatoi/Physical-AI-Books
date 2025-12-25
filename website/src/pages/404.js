import React from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function NotFound() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Page Not Found | ${siteConfig.title}`}>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p>We couldn't find the page you were looking for.</p>
            <p>
              <a href="/">Return to the Physical AI Book homepage</a> to continue your learning journey.
            </p>
            <p>Or explore some of our popular lessons:</p>
            <ul>
              <li><a href="/docs/physical-ai-book/chapter-1/lesson-1">Lesson 1.1: Foundations of Physical AI</a></li>
              <li><a href="/docs/physical-ai-book/chapter-1/lesson-2">Lesson 1.2: Sensors and Perception</a></li>
              <li><a href="/docs/physical-ai-book/chapter-1/lesson-3">Lesson 1.3: Actuators and Control</a></li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;