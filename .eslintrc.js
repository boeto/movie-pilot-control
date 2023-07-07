module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['simple-import-sort'],
  rules: {
    // increase the severity of rules so they are auto-fixable
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages. `react` related packages come first.
              ['^react', '^next', '^@?\\w'],
              // Internal packages.
              ['^(@)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],

        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules
        'import/exports-last': 'error',
        'import/group-exports': 'error',
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/prefer-default-export': 'off',

        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: [
              'state', // for Reduxt
            ],
          },
        ],

        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
};
