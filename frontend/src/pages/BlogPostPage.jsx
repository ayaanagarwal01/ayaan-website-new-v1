import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Clock, BookOpen, ArrowRight } from 'lucide-react';

const categoryColors = {
  Theatre: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Research: 'bg-red-500/10 text-red-400 border-red-500/20',
  Debate: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  Music: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Service: 'bg-green-500/10 text-green-400 border-green-500/20',
  Reflections: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const currentIndex = blogPosts.findIndex((p) => p.id === id);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-amber-400 hover:text-amber-300 transition-colors">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-zinc-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-zinc-800 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors duration-300 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">All Posts</span>
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                categoryColors[post.category] || 'bg-zinc-500/10 text-gray-400 border-zinc-500/20'
              }`}
            >
              {post.category}
            </span>
            <span className="text-gray-600 text-xs">{post.date}</span>
            <span className="flex items-center gap-1 text-gray-600 text-xs">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-custom">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p
                key={idx}
                className="text-gray-400 text-base leading-[1.9] mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Navigation */}
          <div className="mt-20 pt-10 border-t border-zinc-800">
            <div className="grid sm:grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.id}`}
                  className="group p-5 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-0.5"
                >
                  <span className="text-[10px] font-bold text-gray-600 tracking-[0.15em] uppercase">Previous</span>
                  <h3 className="text-white font-bold mt-2 text-sm group-hover:text-amber-400 transition-colors duration-500 line-clamp-2">
                    {prevPost.title}
                  </h3>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.id}`}
                  className={`group p-5 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-0.5 text-right ${
                    !prevPost ? 'sm:col-start-2' : ''
                  }`}
                >
                  <span className="text-[10px] font-bold text-gray-600 tracking-[0.15em] uppercase">Next</span>
                  <h3 className="text-white font-bold mt-2 text-sm group-hover:text-amber-400 transition-colors duration-500 line-clamp-2">
                    {nextPost.title}
                  </h3>
                </Link>
              )}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-[0.1em] uppercase text-gray-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-full transition-all duration-500"
              >
                <BookOpen size={14} />
                All Posts
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
};

export default BlogPostPage;
