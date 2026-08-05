export default {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  semi: false,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  importOrder: ['^@/', '^\\.\\./', '^\\./'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
}