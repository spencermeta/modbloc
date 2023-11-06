module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',  // Deshabilita la regla react/no-unescaped-entities
    'eslintreact/no-danger': 'off',  // Deshabilita la regla eslintreact/no-danger
    // Añade otras reglas que quieras deshabilitar aquí
  },
};