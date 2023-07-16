import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Root from './root';
import Project1 from './project1';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'aboutme',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'projects',
        element: <Projects />,
        children: [
          {
            path: 'project1',
            element: <Project1 />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
