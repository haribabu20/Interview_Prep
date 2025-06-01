// 21. Build a complete blog post layout with responsive typography and sidebar.


import React from 'react';

const BlogPostLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">The Future of Web Development</h1>
          <p className="text-gray-600 text-sm mb-6">Posted on May 31, 2025 by John Doe</p>

          <div className="prose max-w-none">
            <p>
              Web development is evolving rapidly, with new frameworks, tools, and standards emerging at a fast pace.
              Understanding what's coming next helps developers stay relevant and efficient in building modern applications.
            </p>

            <h2>Why Developers Need to Adapt</h2>
            <p>
              Staying updated isn't optional. As technologies evolve, companies expect developers to adopt modern practices and tools.
              From serverless architectures to component-driven design, adaptation is key.
            </p>

            <h3>What to Expect in 2025</h3>
            <ul>
              <li>Increased adoption of AI-driven development tools</li>
              <li>More widespread use of edge computing</li>
              <li>Deeper integration between design systems and code</li>
            </ul>

            <p>
              The future is exciting — and also challenging. But with the right learning mindset, developers can thrive.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
          <ul className="space-y-2 text-blue-600">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Frontend</a></li>
            <li><a href="#">Backend</a></li>
            <li><a href="#">Cloud</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogPostLayout;
