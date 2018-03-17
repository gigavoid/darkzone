module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['prettier', 'standard'],
  env: {
    es6: true,
    node: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
