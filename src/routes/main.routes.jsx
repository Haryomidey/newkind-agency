import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from '../pages/home';
import ScrollToTop from '../components/ScrollToTop';
import About from '../pages/About';
import Services from '../pages/service';
import Blogs from '../pages/blogs';
import Career from '../pages/career';
import Work from '../pages/work';
import Contact from '../pages/contact';
import NotFound from '../pages/error/NotFound';
import PrivacyPolicy from '../pages/privacy-policy';
import KindredCaseStudy from '../pages/case-study';
import BlogOne from '../pages/blog-1';
import BlogTwo from '../pages/blog-2';
import BlogThree from '../pages/blog-3';

function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <MainLayout>
        <Services />
      </MainLayout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <MainLayout>
        <Blogs />
      </MainLayout>
    ),
  },
  {
    path: "/career",
    element: (
      <MainLayout>
        <Career />
      </MainLayout>
    ),
  },
  {
    path: "/work",
    element: (
      <MainLayout>
        <Work />
      </MainLayout>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <MainLayout>
        <PrivacyPolicy />
      </MainLayout>
    ),
  },
  {
    path: "/blogs/new-kindred-case-study",
    element: (
      <MainLayout>
        <KindredCaseStudy />
      </MainLayout>
    ),
  },
  {
    path: "/blogs/blog-1",
    element: (
      <MainLayout>
        <BlogOne />
      </MainLayout>
    ),
  },
  {
    path: "/blogs/blog-2",
    element: (
      <MainLayout>
        <BlogTwo />
      </MainLayout>
    ),
  },
  {
    path: "/blogs/blog-3",
    element: (
      <MainLayout>
        <BlogThree />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
