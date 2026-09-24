import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './compontent/Navbar';
import Footer from './compontent/Footer';
import ScrollToTop from './compontent/ScrollToTop';
import PageLoader from './compontent/PageLoader';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import FinishingWorks from './page/FinishingWorks';
import Projects from './page/Projects';
import Process from './page/Process';
import Contact from './page/Contact';
import Quote from './page/Quote';
import Blog from './page/Blog';
import BlogDetail from './page/BlogDetail';
import PrivacyPolicy from './page/PrivacyPolicy';
import TermsConditions from './page/TermsConditions';
import WhyChooseUs from './page/WhyChooseUs';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLoader />
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/finishing-works" element={<FinishingWorks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/process" element={<Process />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
