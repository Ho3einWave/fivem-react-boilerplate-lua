export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-rem-to-pixel': {
      propList: ['*'],     // Convert all properties (padding, margin, etc.)
      rootValue: 16, // Match your HTML font size (usually 16px by default in Tailwind)
      replace: true, // Replace `rem` values with `px`
    },
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // The width of your design
      unitPrecision: 5,   // Number of decimal places to round to
      viewportUnit: 'vw', // Convert to `vm` (viewport width unit)
      selectorBlackList: [], // Add any selectors you don't want to convert
      minPixelValue: 0,  // Set the minimum `px` value to convert
      mediaQuery: false, // Ignore media queries (set true if needed)

    },
  },
}
