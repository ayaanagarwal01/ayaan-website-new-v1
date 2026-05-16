import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, BookOpen, Clock, ArrowRight } from 'lucide-react';

const categoryColors = {
  Theatre: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Research: 'bg-red-500/10 text-red-400 border-red-500/20',
  Debate: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  Music: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Service: 'bg-green-500/10 text-green-400 border-green-500/20',
  Reflections: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
};

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];

  const filteredPosts =
    activeFilter === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeFilter);

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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors duration-300 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/15 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            <span className="text-red-400 text-xs font-semibold tracking-wider uppercase">Stories</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl">
            Personal reflections on research, performances, service, and everything in between.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-zinc-800 sticky top-[74px] z-30 bg-zinc-900/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-white/10 text-white border-white/20'
                    : 'bg-transparent text-gray-500 border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group relative p-7 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-5">
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

                  {/* Title */}
                  <h2
                    className={`font-bold text-white group-hover:text-amber-400 transition-colors duration-500 mb-4 leading-snug tracking-tight ${
                      index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'
                    }`}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-gray-500 group-hover:text-amber-400 transition-colors duration-500">
                    <BookOpen size={14} />
                    <span className="text-xs font-bold tracking-wider uppercase">Read More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
};

export default BlogPage;
