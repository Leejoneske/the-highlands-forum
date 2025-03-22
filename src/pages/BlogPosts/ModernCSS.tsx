
import BlogPost from '@/components/BlogPost';
import { FileText, Layout, Paintbrush, Smartphone, Maximize, Code } from 'lucide-react';

const ModernCSS = () => {
  return (
    <BlogPost
      title="The Complete Guide to Modern CSS"
      author="Lee Jones"
      date="April 12, 2023"
      readTime="6 min read"
      coverImage="https://images.unsplash.com/photo-1518770660439-4636190af475"
      content={
        <>
          <p className="lead">
            Modern CSS has evolved dramatically in recent years, introducing powerful features that make it easier than ever to create responsive, maintainable designs. In this guide, we'll explore the most important modern CSS techniques and how to use them effectively.
          </p>
          
          <div className="flex items-center my-8 p-6 bg-blue-50 rounded-lg">
            <Paintbrush className="w-12 h-12 text-highlands-primary mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">The New CSS</h3>
              <p className="m-0">
                Modern CSS provides elegant solutions to problems that once required complex hacks or JavaScript.
              </p>
            </div>
          </div>
          
          <h2>1. CSS Custom Properties (Variables)</h2>
          <p>
            CSS variables allow you to define reusable values throughout your stylesheet, making it easier to maintain consistent design tokens and create dynamic themes.
          </p>
          
          <pre><code>{`
:root {
  --primary-color: #3490dc;
  --secondary-color: #ffed4a;
  --font-main: 'Inter', sans-serif;
  --spacing-unit: 8px;
}

.button {
  background-color: var(--primary-color);
  font-family: var(--font-main);
  padding: calc(var(--spacing-unit) * 2);
}

/* For dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #90cdf4;
  }
}
          `}</code></pre>
          
          <p>
            The true power of CSS variables comes when you combine them with JavaScript to create dynamic theme switching, responsive adjustments, or user customization.
          </p>
          
          <div className="flex items-center justify-center my-10">
            <Layout className="w-16 h-16 text-highlands-primary" />
          </div>
          
          <h2>2. CSS Grid Layout</h2>
          <p>
            CSS Grid is a two-dimensional layout system that has revolutionized how we create complex layouts. Unlike older techniques, Grid allows you to control both rows and columns simultaneously.
          </p>
          
          <p>
            A basic grid layout looks like this:
          </p>
          
          <pre><code>{`
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

/* Responsive adjustment */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
          `}</code></pre>
          
          <p>
            For more complex layouts, you can name grid areas and place items using those names:
          </p>
          
          <pre><code>{`
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
          `}</code></pre>
          
          <div className="flex items-center my-8 p-6 bg-blue-50 rounded-lg">
            <Maximize className="w-12 h-12 text-highlands-primary mr-4" />
            <p className="m-0">
              <strong>Grid vs. Flexbox:</strong> Use Grid for two-dimensional layouts (rows and columns together) and Flexbox for one-dimensional layouts (either row OR column).
            </p>
          </div>
          
          <h2>3. Flexbox</h2>
          <p>
            Flexbox is perfect for one-dimensional layouts where you need to distribute space and align items along a single axis.
          </p>
          
          <pre><code>{`
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* grow, shrink, basis */
  display: flex;
  flex-direction: column;
}

.card-footer {
  margin-top: auto; /* pushes footer to bottom */
}
          `}</code></pre>
          
          <p>
            The combination of <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code> gives you fine-grained control over how flex items behave.
          </p>
          
          <div className="flex items-center justify-center my-10">
            <Smartphone className="w-16 h-16 text-highlands-primary" />
          </div>
          
          <h2>4. Modern Responsive Design</h2>
          <p>
            Modern responsive design goes beyond media queries to include container queries, fluid typography, and intrinsic sizing.
          </p>
          
          <h3>Container Queries</h3>
          <p>
            Container queries allow you to style elements based on their container's size rather than the viewport size:
          </p>
          
          <pre><code>{`
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .container-item {
    display: flex;
  }
}
          `}</code></pre>
          
          <h3>Fluid Typography</h3>
          <p>
            Create responsive text sizes that scale smoothly between viewport sizes:
          </p>
          
          <pre><code>{`
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}
          `}</code></pre>
          
          <h3>Aspect Ratio</h3>
          <p>
            Maintain consistent aspect ratios for images and videos:
          </p>
          
          <pre><code>{`
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}
          `}</code></pre>
          
          <h2>5. Modern CSS Features</h2>
          <p>
            CSS now includes features that previously required JavaScript or complex workarounds:
          </p>
          
          <ul>
            <li><strong>Scroll snap:</strong> Create smoothly snapping scroll experiences</li>
            <li><strong>Logical properties:</strong> Write direction-agnostic styles that work for different writing modes</li>
            <li><strong>Custom properties:</strong> Create reusable values and dynamic styling</li>
            <li><strong>Shapes and masks:</strong> Create complex shape layouts</li>
            <li><strong>Background blend modes:</strong> Create image effects without Photoshop</li>
          </ul>
          
          <div className="flex items-center my-8 p-6 bg-blue-50 rounded-lg">
            <Code className="w-12 h-12 text-highlands-primary mr-4" />
            <p className="m-0">
              <strong>Pro Tip:</strong> Check browser support for new CSS features on <a href="https://caniuse.com" target="_blank" rel="noopener noreferrer">caniuse.com</a> before using them in production.
            </p>
          </div>
          
          <h2>Conclusion</h2>
          <p>
            Modern CSS has matured into a powerful, flexible system for creating sophisticated designs. By embracing these modern techniques, you can write more maintainable CSS that adapts to different devices and user preferences.
          </p>
          <p>
            As you build your next project, leverage these features to create better user experiences with less code and fewer dependencies.
          </p>
        </>
      }
    />
  );
};

export default ModernCSS;
