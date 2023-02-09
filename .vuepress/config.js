module.exports = {

  title: 'Eva Wolf',

  description: 'Iʼm a Product Designer based in Hamburg, Germany with experience in delivering end-to-end UX design for software products. Iʼm a creative outside-the-box thinker and passionate for Design Thinking. In this portfolio you will find some of my past work in the form of UX case studies.',

  themeConfig: {
    author: 'Eva Katharina Wolf',
    sidebar: false,
    search: false
  },

  plugins: {
    'seo': {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.label,
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date)
    }
  },

  configureWebpack(config) {
    return {
      resolve: {
        alias: {
          'styles': '../theme/styles'
        }
      }
    }
  }
}
