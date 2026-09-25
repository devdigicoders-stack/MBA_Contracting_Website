import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Search,
  Building2,
  Sparkles,
  Layers,
  Loader2,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState(['All']);

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1';

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiUrl}/blogs?limit=50`);
      if (!response.ok) {
        throw new Error('Failed to load blog posts. Please make sure the backend is active.');
      }
      const json = await response.json();
      
      const blogList = json.data?.blogs || json.data || [];
      setBlogs(blogList);

      // Extract unique categories
      const uniqueCats = ['All', ...new Set(blogList.map((b) => b.category).filter(Boolean))];
      setCategories(uniqueCats);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(err.message || 'Something went wrong while fetching blogs.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recent';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Filtered blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === 'All' ||
      (blog.category && blog.category.toLowerCase() === activeCategory.toLowerCase());

    const matchesSearch =
      searchQuery.trim() === '' ||
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const resolveImage = (img) => {
    if (!img) return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop';
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    const base = apiUrl.replace(/\/api\/v1\/?$/, '');
    return `${base}${img.startsWith('/') ? '' : '/'}${img}`;
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-gray-900">
      {/* 1. Hero Section matching screenshot */}
      <section className="relative w-full overflow-hidden bg-[#09121c] min-h-[420px] lg:min-h-[520px] flex items-center">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image copy 4.png"
            alt="Our Blog"
            className="w-full h-full object-cover object-center md:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#08121e]/95 md:via-[#08121e]/90 lg:via-[#08121e]/80 to-[#08121e]/90 md:to-transparent w-full" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070e17]/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative z-10">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow: OUR BLOG ———— */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] text-[#004080] uppercase">
                OUR BLOG
              </span>
              <div className="w-12 h-[2px] bg-[#004080]" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-4 uppercase">
              Insights for a <br />
              <span className="text-[#004080]">Better Tomorrow</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4 max-w-lg">
              Explore expert advice, industry trends, project updates and helpful tips on construction, renovation, finishing and maintenance.
            </p>

            {/* Search Input Box */}
            <div className="mt-8 max-w-md">
              <div className="relative flex items-center bg-white rounded-xl border border-gray-300 shadow-sm p-1.5 focus-within:border-[#004080] focus-within:ring-2 focus-within:ring-[#004080]/20 transition-all">
                <Search className="w-5 h-5 text-gray-400 ml-2.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics..."
                  className="w-full pl-3 pr-2 py-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-gray-400 hover:text-gray-700 px-2 py-1 mr-1"
                  >
                    Clear
                  </button>
                )}
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg bg-[#004080] hover:bg-[#b58f4a] text-white flex items-center justify-center shrink-0 transition-all shadow-sm cursor-pointer"
                  title="Search"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Category Filtering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Pills Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Latest Articles & Field Reports</h2>
            <p className="text-sm text-gray-500 mt-1">
              Browse our technical write-ups and construction case studies.
            </p>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-none text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  activeCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#004080] text-white shadow-md shadow-[#004080]/20'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Blog Cards Grid */}
        <div className="mt-10">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <Loader2 className="w-10 h-10 text-[#004080] animate-spin mb-4" />
              <p className="text-gray-500 text-sm font-medium">Loading articles from MBA Contracting...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-100 p-8 max-w-xl mx-auto">
              <p className="text-red-700 font-semibold mb-2">Notice</p>
              <p className="text-red-600 text-sm mb-4">{error}</p>
              <button
                onClick={fetchBlogs}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-medium hover:bg-red-700 transition"
              >
                Retry
              </button>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 p-8 max-w-xl mx-auto">
              <BookOpen className="w-12 h-12 text-[#004080] mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold text-gray-900">No Articles Found</h3>
              <p className="text-gray-500 text-sm mt-1 mb-5">
                {searchQuery
                  ? `No articles matched your search query "${searchQuery}".`
                  : `No blogs currently published under "${activeCategory}".`}
              </p>
              {(searchQuery || activeCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="px-5 py-2.5 bg-[#004080] text-white rounded-none text-xs font-semibold hover:bg-[#b58f4a] transition-all cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog._id || blog.slug}
                  className="bg-white rounded-none border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container (Clean image without text overlays) */}
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="relative block w-full h-56 overflow-hidden bg-gray-100"
                  >
                    <img
                      src={resolveImage(blog.image)}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop';
                      }}
                    />
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta Info: Category & Date */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-50 text-[#004080] border border-[#004080]/30">
                        <Tag className="w-3 h-3" />
                        {blog.category || 'General'}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5 text-[#004080]" />
                        <span>{formatDate(blog.createdAt)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link to={`/blog/${blog.slug}`} className="block">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#004080] transition-colors line-clamp-2 leading-snug mb-3">
                        {blog.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                      {blog.excerpt || 'Explore this in-depth guide on modern contracting, luxury villas, and architectural finishings.'}
                    </p>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004080] group-hover:text-[#b58f4a] group-hover:gap-2 transition-all cursor-pointer"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <span className="text-xs text-gray-400 font-medium">
                        By {blog.author || 'MBA Engineers'}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
