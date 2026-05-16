import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import ContactFooter from '../components/ContactFooter';
import { ArrowLeft, Clock, BookOpen, ArrowRight } from 'lucide-react';

const categoryColors = {
  Theatre: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Research: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Debate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Music: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Service: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Reflections: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const currentIndex = blogPosts.findIndex((p) => p.id === id);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#0a0a1a] min-h-screen relative z-10">
      <section className="relative pt-28 pb-16 bg-[#0c0c20] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors duration-300 mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">All Posts</span>
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${categoryColors[post.category] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>{post.category}</span>
            <span className="text-slate-600 text-xs">{post.date}</span>
            <span className="flex items-center gap-1 text-slate-600 text-xs"><Clock size={12} />{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">{post.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-slate-400 text-base leading-[1.9] mb-6 last:mb-0">{paragraph}</p>
            ))}
          </article>

          <div className="mt-20 pt-10 border-t border-slate-800/50">
            <div className="grid sm:grid-cols-2 gap-4">
              {prevPost && (
                <Link to={`/blog/${prevPost.id}`} className="group p-5 rounded-2xl bg-[#0f1025]/60 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:-translate-y-0.5 shimmer-hover">
                  <span className="text-[10px] font-bold text-slate-600 tracking-[0.15em] uppercase">Previous</span>
                  <h3 className="text-white font-bold mt-2 text-sm group-hover:text-blue-400 transition-colors duration-500 line-clamp-2">{prevPost.title}</h3>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.id}`} className={`group p-5 rounded-2xl bg-[#0f1025]/60 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:-translate-y-0.5 text-right shimmer-hover ${!prevPost ? 'sm:col-start-2' : ''}`}>
                  <span className="text-[10px] font-bold text-slate-600 tracking-[0.15em] uppercase">Next</span>
                  <h3 className="text-white font-bold mt-2 text-sm group-hover:text-blue-400 transition-colors duration-500 line-clamp-2">{nextPost.title}</h3>
                </Link>
              )}
            </div>
            <div className="mt-8 text-center">
              <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-[0.1em] uppercase text-slate-400 hover:text-white border border-slate-700 hover:border-blue-500/50 rounded-full transition-all duration-500">
                <BookOpen size={14} /> All Posts <ArrowRight size={14} />
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
