module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['twMerge', 'twOrder'],
};
