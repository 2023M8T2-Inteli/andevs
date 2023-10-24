import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'e43'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '0de'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e29'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '0ee'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7df'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '658'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '816'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'dd4'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ed9'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '41f'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'aa7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '9c3'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '42c'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '5f1'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '5c8'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a4a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'ea7'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '087'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'af1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bed'),
    routes: [
      {
        path: '/docs/business/matriz-de-risco',
        component: ComponentCreator('/docs/business/matriz-de-risco', '449'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/arquitetura-do-sistema',
        component: ComponentCreator('/docs/category/arquitetura-do-sistema', '88c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/business',
        component: ComponentCreator('/docs/category/business', 'fa7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/docusaurus-advanced',
        component: ComponentCreator('/docs/category/docusaurus-advanced', '4e2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/docusaurus-basics',
        component: ComponentCreator('/docs/category/docusaurus-basics', '9c0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/ética',
        component: ComponentCreator('/docs/category/ética', 'a8d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/user-experience',
        component: ComponentCreator('/docs/category/user-experience', 'bf9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/ethics/matriz-de-risco',
        component: ComponentCreator('/docs/ethics/matriz-de-risco', '1a3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/system_architecture/matriz-de-risco',
        component: ComponentCreator('/docs/system_architecture/matriz-de-risco', '452'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/user_experience/matriz-de-risco',
        component: ComponentCreator('/docs/user_experience/matriz-de-risco', '39c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/z_docusaurus_advanceds/manage-docs-versions',
        component: ComponentCreator('/docs/z_docusaurus_advanceds/manage-docs-versions', '0de'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/z_docusaurus_advanceds/translate-your-site',
        component: ComponentCreator('/docs/z_docusaurus_advanceds/translate-your-site', '356'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/z_docusaurus_basics/congratulations',
        component: ComponentCreator('/docs/z_docusaurus_basics/congratulations', '659'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/z_docusaurus_basics/create-a-blog-post',
        component: ComponentCreator('/docs/z_docusaurus_basics/create-a-blog-post', '4ea'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/z_docusaurus_basics/create-a-document',
        component: ComponentCreator('/docs/z_docusaurus_basics/create-a-document', 'bd4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/z_docusaurus_basics/create-a-page',
        component: ComponentCreator('/docs/z_docusaurus_basics/create-a-page', '2e3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/z_docusaurus_basics/deploy-your-site',
        component: ComponentCreator('/docs/z_docusaurus_basics/deploy-your-site', '706'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/z_docusaurus_basics/markdown-features',
        component: ComponentCreator('/docs/z_docusaurus_basics/markdown-features', '4c7'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '990'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
