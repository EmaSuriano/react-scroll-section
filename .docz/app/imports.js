export const imports = {
  'docs/ScrollingProvider.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-scrolling-provider" */ 'docs/ScrollingProvider.mdx'),
  'docs/Section.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-section" */ 'docs/Section.mdx'),
  'docs/SectionLink.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-section-link" */ 'docs/SectionLink.mdx'),
  'docs/gettingStarted.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-getting-started" */ 'docs/gettingStarted.mdx'),
  'docs/introduction.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-introduction" */ 'docs/introduction.mdx'),
  'docs/realExample.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-real-example" */ 'docs/realExample.mdx'),
}
