module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    react: {
      'pragma': 'React',
      'version': 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'simple-import-sort',
    '@typescript-eslint'
  ],
  rules: {
    'eqeqeq': 'error',
    'no-eval': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'new-cap': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'camelcase': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'none',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false
        }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
