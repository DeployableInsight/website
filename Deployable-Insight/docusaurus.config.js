module.exports = {
  title: 'Deployable Insight',
  tagline: 'Deploying Shortly',
  url: 'https://DeployableInsight.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'DeployableInsight', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Deployable Insight',
      logo: {
        alt: 'Deployable',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/DeployableInsight',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mbed Forums',
              href: 'https://forums.mbed.com',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DeployableInsight',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deployable Insight LLC`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
