module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['_site/**/*.html'],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: 'black',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
    fontFamily: {
      sans: [
        'Fira Sans',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
  variants: {},
  plugins: [],
}
