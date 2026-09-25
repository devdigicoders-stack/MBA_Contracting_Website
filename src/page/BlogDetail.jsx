import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  Share2,
  Eye,
  Check,
  ChevronRight,
  ChevronDown,
  Building2,
  Phone,
  MessageCircle,
  BookOpen,
  HelpCircle,
  Loader2,
  User,
} from 'lucide-react';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [popularPosts, setPopularPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [toc, setToc] = useState([]);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchPostAndSidebar();
  }, [slug]);

  // Extract Table of Contents after content is loaded
  useEffect(() => {
    if (!loading && post && post.content) {
      setTimeout(() => {
        const contentDiv = document.getElementById('blog-post-content');
        if (contentDiv) {
          const headings = contentDiv.querySelectorAll('h2, h3');
          const tocData = [];
          headings.forEach((heading, index) => {
            if (!heading.id) {
              const text = heading.textContent || `section-${index}`;
              const cleanId = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
              heading.id = cleanId || `section-${index}`;
            }
            tocData.push({
              id: heading.id,
              text: heading.textContent || '',
              level: heading.tagName.toLowerCase() === 'h2' ? 2 : 3,
            });
          });
          setToc(tocData);
        }
      }, 300);
    }
  }, [post, loading]);

  const fetchPostAndSidebar = async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Fetch single blog post by slug
      const res = await fetch(`${apiUrl}/blogs/${slug}`);
      if (!res.ok) {
        throw new Error('Blog post not found.');
      }
      const data = await res.json();
      const currentBlog = data.data || data;
      setPost(currentBlog);

      // 2. Fetch popular/recent blogs for sidebar
      const listRes = await fetch(`${apiUrl}/blogs?limit=8`);
      if (listRes.ok) {
        const listData = await listRes.json();
        const allBlogs = listData.data?.blogs || listData.data || [];

        // Popular (sorted by views)
        const popular = [...allBlogs]
          .filter((b) => b.slug !== slug)
          .sort((a, b) => (b.views || 0) - (a.views || 0))
          .slice(0, 4);
        setPopularPosts(popular);

        // Categories count
        const catMap = {};
        allBlogs.forEach((b) => {
          if (b.category) {
            catMap[b.category] = (catMap[b.category] || 0) + 1;
          }
        });
        setCategories(
          Object.entries(catMap).map(([name, count]) => ({ name, count }))
        );
      }
    } catch (err) {
      console.error('Error fetching blog details:', err);
      setError(err.message || 'Unable to load this blog article.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently Published';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const resolveImage = (img) => {
    if (!img) return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop';
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    const base = apiUrl.replace(/\/api\/v1\/?$/, '');
    return `${base}${img.startsWith('/') ? '' : '/'}${img}`;
  };

  const shareToPlatform = (platform) => {
    if (typeof window === 'undefined' || !post) return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title || 'MBA Contracting Blog');

    if (platform === 'copy') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      return;
    }

    let shareUrl = '';
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=450');
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fcfbf9] flex flex-col items-center justify-center py-24">
        <Loader2 className="w-12 h-12 text-[#004080] animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Loading article details...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#fcfbf9] flex flex-col items-center justify-center py-24 px-4 text-center">
        <BookOpen className="w-16 h-16 text-[#004080] mb-4 opacity-50" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{error || 'Article Not Found'}</h2>
        <p className="text-gray-500 max-w-md mb-6">
          The requested article may have been relocated or updated by our engineering editorial team.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#004080] text-white rounded-xl text-sm font-semibold hover:bg-[#b58f4a] transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0b1722] to-[#162737] pt-12 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-bold bg-[#004080] text-white">
                <Tag className="w-3 h-3" />
                {post.category || 'Contracting'}
              </span>

              {post.readTime && (
                <span className="inline-flex items-center gap-1 text-xs text-gray-300 font-medium">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  {post.readTime}
                </span>
              )}

              <span className="inline-flex items-center gap-1 text-xs text-gray-300 font-medium">
                <Eye className="w-3.5 h-3.5 text-gray-400" />
                {post.views || 1} Views
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-700/50 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#004080]/20 border border-[#004080]/40 flex items-center justify-center text-[#004080] font-bold text-sm">
                  {post.author ? post.author.charAt(0).toUpperCase() : 'M'}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-100 uppercase tracking-wider">
                    {post.author || 'MBA Editorial Team'}
                  </h4>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.createdAt)}
                  </p>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-semibold hidden sm:inline mr-1">Share:</span>
                <button
                  onClick={() => shareToPlatform('facebook')}
                  className="w-8 h-8 rounded-none bg-white/10 hover:bg-[#1877f2] hover:text-white text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="text-xs font-bold">f</span>
                </button>
                <button
                  onClick={() => shareToPlatform('twitter')}
                  className="w-8 h-8 rounded-none bg-white/10 hover:bg-white hover:text-black text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="text-xs font-bold">𝕏</span>
                </button>
                <button
                  onClick={() => shareToPlatform('linkedin')}
                  className="w-8 h-8 rounded-none bg-white/10 hover:bg-[#0077b5] hover:text-white text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="text-xs font-bold">in</span>
                </button>
                <button
                  onClick={() => shareToPlatform('copy')}
                  className="px-2.5 h-8 rounded-none bg-white/10 hover:bg-[#004080] hover:text-white text-gray-300 flex items-center gap-1 text-xs font-semibold transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Link'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Article Body & Sidebar */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-14 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT COLUMN: Main Post (8 cols) */}
          <article className="lg:col-span-8 flex flex-col space-y-8 bg-white p-6 sm:p-8 rounded-none shadow-md border border-gray-200">

            {/* Excerpt Highlight Box */}
            {post.excerpt && (
              <div className="p-5 sm:p-6 rounded-none bg-amber-50/60 border-l-4 border-[#004080] text-gray-800 text-base leading-relaxed italic shadow-xs">
                "{post.excerpt}"
              </div>
            )}

            {/* Featured Image */}
            <div className="relative w-full h-[320px] sm:h-[440px] rounded-none overflow-hidden bg-gray-100 shadow-md">
              <img
                src={resolveImage(post.image)}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop';
                }}
              />
            </div>



            {/* HTML Article Content */}
            <div
              id="blog-post-content"
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 pt-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Pill List */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Related Topics:
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:border-[#004080] hover:text-[#004080] transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Accordion if available */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="pt-8 border-t border-gray-200 space-y-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#004080]" />
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {post.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-none border border-gray-200 bg-white overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-gray-900 hover:text-[#004080] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                            openFaqIndex === index ? 'rotate-180 text-[#004080]' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === index && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Editorial Bio Card */}
            <div className="p-6 rounded-none bg-gradient-to-r from-gray-50 to-amber-50/30 border border-gray-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-14 h-14 rounded-none bg-[#004080] text-white flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
                {post.author ? post.author.charAt(0).toUpperCase() : 'M'}
              </div>
              <div className="text-center sm:text-left space-y-1">
                <h4 className="text-sm font-bold text-gray-900">
                  Written by {post.author || 'MBA Senior Contracting Engineers'}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Specialists in turnkey villa construction, majlis extensions, and architectural luxury finishing across the State of Qatar.
                </p>
              </div>
            </div>

            {/* Navigation footer */}
            <div className="pt-6 flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#004080] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>
            </div>

          </article>

          {/* RIGHT COLUMN: Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24 h-fit">
            
            {/* Table of Contents (TOC) */}
            {toc.length > 0 && (
              <div className="p-6 rounded-none bg-white border border-gray-100 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#004080]" />
                  Table of Contents
                </h3>
                <nav className="space-y-2 pt-1">
                  {toc.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className={`block text-xs sm:text-sm text-gray-600 hover:text-[#004080] hover:underline transition-colors ${
                        item.level === 3 ? 'pl-4 text-xs' : 'font-semibold'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.id);
                        if (el) {
                          const offset = 120; // Adjust for fixed navbar
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = el.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }}
                    >
                      • {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}
            
            {/* 1. Request Consultation CTA Widget */}
            <div className="p-6 rounded-none bg-gradient-to-br from-[#0b1722] to-[#162737] text-white shadow-xl space-y-5 border border-gray-800">
              <div className="w-10 h-10 rounded-none bg-[#004080]/20 flex items-center justify-center text-[#004080]">
                <Building2 className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Planning a Villa or Finishing Project?
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mt-2">
                  Speak directly with MBA's chief site engineers for free design consultation and budget estimation in Qatar.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <Link
                  to="/quote"
                  className="w-full py-3 bg-[#004080] hover:bg-[#b58f4a] text-white rounded-xl text-xs font-bold text-center block shadow-md shadow-[#004080]/20 transition-all cursor-pointer"
                >
                  Request a Free Quote
                </Link>
                <Link
                  to="/contact"
                  className="w-full py-3 bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-xl text-xs font-bold text-center block transition-all cursor-pointer"
                >
                  Contact Our Office
                </Link>
              </div>
            </div>



            {/* 3. Popular / Trending Posts Widget */}
            {popularPosts.length > 0 && (
              <div className="p-6 rounded-none bg-white border border-gray-100 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-3">
                  Popular Reads
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((item) => (
                    <Link
                      key={item._id || item.slug}
                      to={`/blog/${item.slug}`}
                      className="flex items-center gap-3.5 group"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                        <img
                          src={resolveImage(item.image)}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            e.target.src =
                              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-[#004080] uppercase block mb-0.5">
                          {item.category || 'Article'}
                        </span>
                        <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#004080] transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 mt-1 block">
                          {formatDate(item.createdAt)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>

        </div>
      </main>
    </div>
  );
}
