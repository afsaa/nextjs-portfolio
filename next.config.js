const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALIZE === 'true',
});

const config = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['localhost', 'images.ctfassets.net'],
  },
  i18n: {
    locales: ['en-US', 'es-CO'],
    defaultLocale: 'en-US',
  },
};

module.exports = withBundleAnalyzer(config);
