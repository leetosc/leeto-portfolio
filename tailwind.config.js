/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: 'rgb(45, 57, 227)',
        customSecondary: 'rgb(161, 163, 247)',
        customDarkBg1: 'rgb(22, 22, 27)',
        customDarkBg2: 'rgb(28, 29, 33)',
        customDarkBg3: 'rgb(38, 39, 44)',
        customDarkBg3Hover: 'rgb(45, 46, 52)',
        customContentSubtitle: 'rgb(178, 184, 205)',
        customGrayBorder: 'rgb(255,255,255,0.1)',
        customGrayText: 'rgb(174, 178, 183)',
        customDarkBgTransparent: 'rgb(21, 22, 25, 0.7)',
        customDarkBgTransparentDarker: 'rgb(0,0,0,0.5)',
        customDarkBgTransparentLighter: 'rgb(38, 39, 44, 0.7)',
      },
      fontFamily: {
        Inter: 'Inter',
      },
      screens: {
        xs: '530px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xll: '1400px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
