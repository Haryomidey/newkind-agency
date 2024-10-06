import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from '../pages/Home';
import ScrollToTop from '../components/ScrollToTop';
import About from '../pages/About';
import Services from '../pages/service';
import Blogs from '../pages/blogs';
import Career from '../pages/career';
import Work from '../pages/work';
import Contact from '../pages/contact';

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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
