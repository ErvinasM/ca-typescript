module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    }],
    'react/jsx-props-no-spreading': [0],
    'react/require-default-props': [0],
    'jsx-a11y/interactive-supports-focus': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-static-element-interactions': [0]
  },
};
